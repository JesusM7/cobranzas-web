import { Box, Button, FormControl, FormErrorMessage, FormLabel, Grid, GridItem, Input, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Select, Text, Th, Thead, useToast } from "@chakra-ui/react";
import { useFormik } from "formik";
import { Bank, ChargeStatus, Charges } from "../../../../../hooks/useCharges";
import useSaveCharges from "../../../../../hooks/useSaveCharges";
import { useLatestExchangeRate } from "../../../../../hooks/useExchangeRate";
import moment from "moment";
import { useEffect } from "react";
import { Invoice } from "../../../../../hooks/useInvoices";

export default function CreateCharges({ initialValues, invoice }: { invoice: Invoice, initialValues?: CreateCharge }) {


    const { saveCharges, loading, error } = useSaveCharges();
    const toast = useToast();
    const { exchangeRate } = useLatestExchangeRate();

    const formik = useFormik<CreateCharge>({
        initialValues: initialValues || {
            amount: 0,
            amountBs: 0,
            date: moment().format('YYYY-MM-DD'),
            exchangeRate: exchangeRate?.rate || 0,
            ref: "",
            bank: Bank.BANESCO,
            status: ChargeStatus.PENDING,
            invoiceNumber: invoice.number,
            observation: "",
        },
        validate: (values) => validateCreateChargesForm(values, invoice),
        validateOnChange: true,
        onSubmit: async (values) => {
            await saveCharges(values);
            toast({
                title: error ? 'Error al crear el abono' : "Abono creado",
                description: error ? 'El abono no pudo ser creado' : "El abono fue creado exitosamente",
                status: error ? 'error' : "success",
                duration: 5000,
                isClosable: true,
            });
            if (!error) {
                formik.resetForm();
            }
        },
    });

     useEffect(() => {
        const usd = formik.values.amount;
        const rate = formik.values.exchangeRate;
        const bs = usd * rate;
        formik.setFieldValue('amountBs', isNaN(bs) ? 0 : bs);
    }, [formik.values.exchangeRate, formik.values.amount]);

    useEffect(() => {
        const bs = formik.values.amountBs;
        const rate = formik.values.exchangeRate;
        const usd = bs / rate;
        formik.setFieldValue('amount', isNaN(usd) ? 0 : usd);
    }, [formik.values.exchangeRate, formik.values.amountBs]);

    useEffect(() => {
        formik.setFieldValue('exchangeRate', exchangeRate?.rate || 0);
    }, [exchangeRate]);

    return <Box paddingX={'5%'} paddingY={'2.5%'}>
        <Text color='secondary.500' fontSize={'ls'} fontWeight={"bold"} >CARGAR ABONO</Text>
        <form onSubmit={formik.handleSubmit}>
            <Grid templateColumns={'repeat(12,1fr)'} gap={'10px'} marginY={'3%'}>
                <GridItem colSpan={6}>
                    <FormControl id='rif' isInvalid={!!formik.errors.amount} >
                        <FormLabel as='legend'>Monto USD</FormLabel>
                        <NumberInput
                            max={invoice.amountUsd - invoice.charged}
                            onChange={(_, valueAsNumber) => formik.setFieldValue('amount', valueAsNumber || 0)}
                            defaultValue={formik.values.amount}
                            value={formik.values.amount}
                            precision={2}
                            step={0.2}>
                            <NumberInputField />
                            <NumberInputStepper>
                                <NumberIncrementStepper />
                                <NumberDecrementStepper />
                            </NumberInputStepper>
                        </NumberInput>
                        <FormErrorMessage>{formik.errors.amount}</FormErrorMessage>
                    </FormControl>
                </GridItem>
                <GridItem colSpan={6}>
                    <FormControl id='rif' isInvalid={!!formik.errors.amountBs} >
                        <FormLabel as='legend'>Monto BS</FormLabel>
                        <NumberInput
                            onChange={(_, valueAsNumber) => formik.setFieldValue('amountBs', valueAsNumber || 0)}
                            defaultValue={formik.values.amountBs}
                            value={formik.values.amountBs}
                            precision={2}
                            step={0.2}>
                            <NumberInputField />
                            <NumberInputStepper>
                                <NumberIncrementStepper />
                                <NumberDecrementStepper />
                            </NumberInputStepper>
                        </NumberInput>
                        <FormErrorMessage>{formik.errors.amountBs}</FormErrorMessage>
                    </FormControl>
                </GridItem>
                <GridItem colSpan={6}>
                    <FormControl isInvalid={!!formik.errors.date} >
                        <FormLabel as='legend'>Fecha</FormLabel>
                        <Input
                            type='date'
                            value={formik.values.date}
                            onChange={formik.handleChange}
                            name="date"
                        />
                        <FormErrorMessage>{formik.errors.date}</FormErrorMessage>
                    </FormControl>
                </GridItem>
                <GridItem colSpan={6}>
                    <FormControl>
                        <FormLabel as='legend'>Tasa de cambio</FormLabel>
                        <NumberInput defaultValue={formik.values.exchangeRate}>
                            <Input
                                value={formik.values.exchangeRate}
                                onChange={(e) => formik.setFieldValue('exchangeRate', Number.parseFloat(e.currentTarget.value))}
                                name="exchangeRate" />
                        </NumberInput>
                        <FormErrorMessage>{formik.errors.exchangeRate}</FormErrorMessage>
                    </FormControl>
                </GridItem>
                <GridItem colSpan={6}>
                    <FormControl isInvalid={!!formik.errors.bank} >
                        <FormLabel as='legend'>Banco</FormLabel>
                        <Select value={formik.values.bank} onChange={formik.handleChange} name='bank'>
                            <option value={Bank.BANESCO}>BANESCO</option>
                            <option value={Bank.BANPLUS}>BANPLUS</option>
                            <option value={Bank.BCO_EXTERIOR}>BANCO EXTERIOR</option>
                            <option value={Bank.MERCANTIL}>MERCANTIL</option>
                        </Select>
                        <FormErrorMessage>{formik.errors.bank}</FormErrorMessage>
                    </FormControl>
                </GridItem>
                <GridItem colSpan={6}>
                    <FormControl isInvalid={!!formik.errors.ref}>
                        <FormLabel as='legend'>Ref</FormLabel>
                        <Input
                            value={formik.values.ref}
                            onChange={formik.handleChange}
                            name="ref"
                        />
                        <FormErrorMessage>{formik.errors.ref}</FormErrorMessage>
                    </FormControl>
                </GridItem>
                <GridItem colSpan={6}>
                    <FormControl isInvalid={!!formik.errors.status}>
                        <FormLabel as='legend'>Estatus</FormLabel>
                        <Select value={formik.values.status} onChange={formik.handleChange} name='status'>
                            <option value={ChargeStatus.PAID}>PAGADO</option>
                            <option value={ChargeStatus.PENDING}>PENDIENTE</option>
                        </Select>
                        <FormErrorMessage>{formik.errors.status}</FormErrorMessage>
                    </FormControl>
                </GridItem>
                <GridItem colSpan={12}>
                    <FormControl isInvalid={!!formik.errors.observation}>
                        <FormLabel as='legend'>Observacion</FormLabel>
                        <Input
                            value={formik.values.observation}
                            onChange={formik.handleChange}
                            name="observation"
                        />
                        <FormErrorMessage>{formik.errors.observation}</FormErrorMessage>
                    </FormControl>
                </GridItem>
                <GridItem colSpan={12}>
                    <Button isLoading={loading} colorScheme="secondary" type='submit'>Cargar abono</Button>
                </GridItem>
            </Grid>
        </form>
    </Box>
}

export type CreateCharge = {
    amount: number;
    amountBs: number;
    date: string;
    exchangeRate: number;
    ref: string;
    bank: Bank;
    status: ChargeStatus;
    invoiceNumber: number;
    observation?: string;
}

function validateCreateChargesForm(values: CreateCharge, invoice: Invoice) {
    if (!values.amount) {
        return { amount: "El monto es requerido" };
    }
    if (values.amount <= 0) {
        return { amount: "El monto debe ser mayor a 0" };
    }
    if (values.amount > (invoice.amountUsd - invoice.charged)) {
        return { amount: "El monto debe ser menor o igual al total por abonar" };
    }
    if (values.amountBs <= 0) {
        return { amountBs: "El monto en Bs no puede ser menor a 0" };
    }
    if (values.exchangeRate <= 0) {
        return { exchangeRate: "la tasa de cambio no puede ser 0" };
    }
    if (!values.date) {
        return { date: "Ingrese una fecha valida" };
    }
    if (!values.invoiceNumber) {
        return { invoiceNumber: "Ingrese el número de la factura" };
    }
    if (values.invoiceNumber <= 0) {
        return { invoiceNumber: "EL número de factura no puede ser negativo" };
    }
}