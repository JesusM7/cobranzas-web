import { Box, Button, FormControl, FormErrorMessage, FormLabel, Grid, GridItem, Input, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Select, Text, useToast } from "@chakra-ui/react";
import { isNaN, useFormik } from "formik";
import moment from "moment";
import { useLatestExchangeRate } from "../../../../hooks/useExchangeRate";
import { useEffect } from "react";
import { Invoice } from "../../../../hooks/useInvoices";
import useSaveDebitNote from "../../../../hooks/useSaveDebitNote";

export default function CreateDebitNotePage({ initialValues, invoice }: { invoice: Invoice, initialValues?: CreateDebitNoteValues }) {

    const { saveDebitNote, loading, error } = useSaveDebitNote();
    const toast = useToast();
    const { exchangeRate } = useLatestExchangeRate();

    const formik = useFormik<CreateDebitNoteValues>({
        initialValues: initialValues || {
            invoiceId: invoice.id,
            number: 0,
            date: moment().format('YYYY-MM-DD'),
            amountUsd: 0,
            amountBs: 0,
            exchangeRate: exchangeRate?.rate || 0,
            observation: "",
        },
        validate: validateCreateClientForm,
        validateOnChange: true,
        onSubmit: async (values) => {
            await saveDebitNote(values);
            toast({
                title: error ? 'Error al crear la Nota de débito' : "Nota de débito creada",
                description: error ? 'La Nota de débito no pudo ser creada' : "La Nota de débito fue creada exitosamente",
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
        const usd = formik.values.amountUsd;
        const rate = formik.values.exchangeRate;
        const bs = usd * rate;
        formik.setFieldValue('amountBs', isNaN(bs) ? 0 : bs);
    }, [formik.values.exchangeRate, formik.values.amountUsd]);

    useEffect(() => {
        const bs = formik.values.amountBs;
        const rate = formik.values.exchangeRate;
        const usd = bs / rate;
        formik.setFieldValue('amountUsd', isNaN(usd) ? 0 : usd);
    }, [formik.values.exchangeRate, formik.values.amountBs]);

    useEffect(() => {
        formik.setFieldValue('exchangeRate', exchangeRate?.rate || 0);
    }, [exchangeRate]);



    return <Box paddingX={'5%'} paddingY={'2.5%'}>
        <Text color='secondary.500' fontWeight={'bold'} fontSize={'Ls'}>CREAR NOTA DE DÉBITO</Text>
        <form onSubmit={formik.handleSubmit}>
            <Grid templateColumns={'repeat(12,1fr)'} gap={'10px'} marginY={'3%'}>
                <GridItem colSpan={6}>
                    <FormControl id='number' isInvalid={!!formik.errors.number} >
                        <FormLabel as='legend'>N° Nota débito</FormLabel>
                        <NumberInput defaultValue={0}>
                            <NumberInputField
                                value={formik.values.number}
                                onChange={(e) => formik.setFieldValue('number', Number.parseFloat(e.currentTarget.value))}
                                name="number" />
                        </NumberInput>
                        <FormErrorMessage>{formik.errors.number}</FormErrorMessage>
                    </FormControl>
                </GridItem>
                <GridItem colSpan={6}>
                    <FormControl isInvalid={!!formik.errors.date} >
                        <FormLabel as='legend'>Fecha de Emisión</FormLabel>
                        <Input
                            type='date'
                            value={formik.values.date}
                            onChange={formik.handleChange}
                            name="date"
                        />
                        <FormErrorMessage>{formik.errors.date}</FormErrorMessage>
                    </FormControl>
                </GridItem>
                <GridItem colSpan={10}>
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
                    <FormControl isInvalid={!!formik.errors.amountUsd} >
                        <FormLabel as='legend'>Monto USD</FormLabel>
                        <NumberInput
                            onChange={(_, valueAsNumber) => formik.setFieldValue('amountUsd', valueAsNumber || 0)}
                            defaultValue={formik.values.amountUsd}
                            value={formik.values.amountUsd}
                            precision={2}
                            step={0.2}>
                            <NumberInputField />
                            <NumberInputStepper>
                                <NumberIncrementStepper />
                                <NumberDecrementStepper />
                            </NumberInputStepper>
                        </NumberInput>
                        <FormErrorMessage>{formik.errors.amountUsd}</FormErrorMessage>
                    </FormControl>
                </GridItem>
                <GridItem colSpan={6}>
                    <FormControl isInvalid={!!formik.errors.amountBs} >
                        <FormLabel as='legend'>Monto Bs</FormLabel>
                        <NumberInput
                            onChange={(_, valueAsNumber) => formik.setFieldValue('amountBs', valueAsNumber || 0)}
                            defaultValue={formik.values.amountBs}
                            value={formik.values.amountBs}
                            precision={1}
                            step={0.2}>
                            <NumberInputField />
                            <NumberInputStepper>
                                <NumberIncrementStepper />
                                <NumberDecrementStepper />
                            </NumberInputStepper>
                        </NumberInput>
                        <FormErrorMessage>{formik.errors.amountUsd}</FormErrorMessage>
                    </FormControl>
                </GridItem>
                <GridItem colSpan={12}>
                    <FormControl isInvalid={!!formik.errors.observation} >
                        <FormLabel as='legend'>Observación</FormLabel>
                        <Input
                            value={formik.values.observation}
                            onChange={formik.handleChange}
                            name="observation"
                        />
                        <FormErrorMessage>{formik.errors.observation}</FormErrorMessage>
                    </FormControl>
                </GridItem>
                <GridItem colSpan={12}>
                    <Button isLoading={loading} colorScheme="secondary" type='submit'>Crear nota de débito</Button>
                </GridItem>
            </Grid>
        </form>
    </Box>
}

export type CreateDebitNoteValues = {
    invoiceId: string,
    number: number;
    date: string;
    amountUsd: number;
    amountBs: number;
    observation: string;
    exchangeRate: number;
}

function validateCreateClientForm(values: CreateDebitNoteValues) {

    if (!values.number) {
        return { number: "El N° de Nota de crédito es requerido" };
    }
    if (!values.exchangeRate) {
        return { exchangeRate: "Debe ingresar una tasa de cambio" };
    }
    if (values.exchangeRate < 0) {
        return { exchangeRate: "Debe ingresar una tasa mayor a 0" };
    }
    if (!values.amountUsd) {
        return { amountUsd: "Debe ingresar el monto en USD" };
    }
    if (values.amountUsd < 0) {
        return { amountUsd: "Debe ingresar un monto USD valido" };
    }
    if (!values.amountBs) {
        return { amountBs: "Debe ingresar el monto en Bs" };
    }
    if (values.amountBs < 0) {
        return { amountBs: "Debe ingresar un monto Bs valido" };
    }
}