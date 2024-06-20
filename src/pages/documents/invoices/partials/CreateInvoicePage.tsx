import { Box, Button, FormControl, FormErrorMessage, FormLabel, Grid, GridItem, Input, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Select, Text, useToast } from "@chakra-ui/react";
import { useFormik } from "formik";
import useSaveInvoice from "../../../../hooks/useSaveInvoice";
import ClientSelect from "../../../../components/ClientSelect";
import moment from "moment";
import { PaymentCondition } from "../../../../enums/PaymentCondition";
import SellerSelect from "../../../../components/SellerSelect";
import { useLatestExchangeRate } from "../../../../hooks/useExchangeRate";
import { useEffect } from "react";

export default function CreateInvoicePage({ initialValues }: { initialValues?: CreateInvoiceValues }) {

    const { saveInvoice, loading, error } = useSaveInvoice();
    const toast = useToast();
    const { exchangeRate } = useLatestExchangeRate();

    const formik = useFormik<CreateInvoiceValues>({
        initialValues: initialValues || {
            number: 0,
            date: moment().format('YYYY-MM-DD'),
            amountUsd: 0,
            amountBs: 0,
            clientId: "",
            sellerId: "",
            exchangeRate: exchangeRate?.rate || 0,
            paymentCondition: PaymentCondition.COUNTED,
            creditDays: 0,
            observation: "",
        },
        validate: validateCreateClientForm,
        validateOnChange: true,
        onSubmit: async (values) => {
            console.log(values);
            // await saveInvoice(values);
            toast({
                title: error ? 'Error al crear la Factura' : "Factura creada",
                description: error ? 'La factura no pudo ser creada' : "La factura fue creada exitosamente",
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
        <Text color='secondary.500' fontWeight={'bold'} fontSize={'xx-large'}>Crear factura</Text>
        <form onSubmit={formik.handleSubmit}>
            <Grid templateColumns={'repeat(12,1fr)'} gap={'10px'} marginY={'3%'}>
                <GridItem colSpan={6}>
                    <FormControl id='number' isInvalid={!!formik.errors.number} >
                        <FormLabel as='legend'>Número de Factura</FormLabel>
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
                    <FormControl isInvalid={!!formik.errors.clientId}>
                        <FormLabel as='legend'>Cliente</FormLabel>
                        <ClientSelect onChange={formik.handleChange} name="clientId" value={formik.values.clientId} />
                        <FormErrorMessage>{formik.errors.clientId}</FormErrorMessage>
                    </FormControl>
                </GridItem>
                <GridItem colSpan={4}>
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
                <GridItem colSpan={4}>
                    <FormControl isInvalid={!!formik.errors.creditDays} >
                        <FormLabel as='legend'>Días de crédito</FormLabel>
                        <Input
                            value={formik.values.creditDays}
                            onChange={formik.handleChange}
                            name="creditDays"
                        />
                        <FormErrorMessage>{formik.errors.creditDays}</FormErrorMessage>
                    </FormControl>
                </GridItem>
                <GridItem colSpan={4}>
                    <FormControl isInvalid={!!formik.errors.creditDays} >
                        <FormLabel as='legend'>Fecha de vencimiento</FormLabel>
                        <Input
                            type='date'
                            value={moment(formik.values.date).add(formik.values.creditDays, 'days').format('YYYY-MM-DD')}
                            readOnly
                            name="creditDays"
                        />
                        <FormErrorMessage>{formik.errors.creditDays}</FormErrorMessage>
                    </FormControl>
                </GridItem>
                <GridItem colSpan={4}>
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
                <GridItem colSpan={4}>
                    <FormControl isInvalid={!!formik.errors.amountUsd} >
                        <FormLabel as='legend'>Monto USD</FormLabel>
                        <NumberInput
                            onChange={(_, valueAsNumber) => formik.setFieldValue('amountUsd', valueAsNumber || 0)}
                            defaultValue={formik.values.amountUsd}
                            value={formik.values.amountUsd.toFixed(2)}
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
                <GridItem colSpan={4}>
                    <FormControl isInvalid={!!formik.errors.amountBs} >
                        <FormLabel as='legend'>Monto Bs</FormLabel>
                        <NumberInput
                            onChange={(_, valueAsNumber) => formik.setFieldValue('amountBs', valueAsNumber || 0)}
                            defaultValue={formik.values.amountBs}
                            value={formik.values.amountBs.toFixed(2)}
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
                <GridItem colSpan={6}>
                    <FormControl isInvalid={!!formik.errors.paymentCondition} >
                        <FormLabel as='legend'>Condición de pago</FormLabel>
                        <Select value={formik.values.paymentCondition} onChange={formik.handleChange} name='paymentCondition'>
                            <option value={PaymentCondition.CONSIGNMENT}>Consignación</option>
                            <option value={PaymentCondition.CREDIT}>Crédito</option>
                            <option value={PaymentCondition.COUNTED}>Contado</option>
                        </Select>
                        <FormErrorMessage>{formik.errors.paymentCondition}</FormErrorMessage>
                    </FormControl>
                </GridItem>
                <GridItem colSpan={6}>
                    <FormControl isInvalid={!!formik.errors.sellerId} >
                        <FormLabel as='legend'>Vendedor</FormLabel>
                        <SellerSelect
                            value={formik.values.sellerId}
                            onChange={formik.handleChange}
                            name="sellerId"
                        />
                        <FormErrorMessage>{formik.errors.sellerId}</FormErrorMessage>
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
                    <Button isLoading={loading} colorScheme="secondary" type='submit'>Crear Factura</Button>
                </GridItem>
            </Grid>
        </form>
    </Box>
}

export type CreateInvoiceValues = {
    number: number;
    date: string;
    amountUsd: number;
    amountBs: number;
    clientId: string;
    sellerId: string;
    paymentCondition: PaymentCondition;
    creditDays: number;
    observation: string;
    exchangeRate: number;
}

function validateCreateClientForm(values: CreateInvoiceValues) {
    return {}
}