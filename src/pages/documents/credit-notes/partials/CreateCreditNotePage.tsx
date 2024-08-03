import { Box, Button, FormControl, FormErrorMessage, FormLabel, Grid, GridItem, Input, NumberInput, NumberInputField, Text, useToast } from "@chakra-ui/react";
import { isNaN, useFormik } from "formik";
import moment from "moment";
import { useLatestExchangeRate } from "../../../../hooks/useExchangeRate";
import { useEffect } from "react";
import useSaveCreditNote from "../../../../hooks/useSaveCreditNote";
import { Invoice } from "../../../../hooks/useInvoices";
import DebouncedInput from "../../../../components/DebouncedInput";

export default function CreateCreditNotePage({ initialValues, invoice }: { invoice: Invoice, initialValues?: CreateCreditNoteValues }) {

    const { saveCreditNote, loading, error } = useSaveCreditNote();
    const toast = useToast();
    const { exchangeRate } = useLatestExchangeRate();

    const formik = useFormik<CreateCreditNoteValues>({
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
            await saveCreditNote(values);
            toast({
                title: error ? 'Error al crear la Nota de crédito' : "Nota de crédito creada",
                description: error ? 'La Nota de crédito no pudo ser creada' : "La Nota de crédito fue creada exitosamente",
                status: error ? 'error' : "success",
                duration: 2000,
                isClosable: true,
                onCloseComplete() {
                    window.location.reload();
                },
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

    /*     useEffect(() => {
            const bs = formik.values.amountBs;
            const rate = formik.values.exchangeRate;
            const usd = bs / rate;
            formik.setFieldValue('amountUsd', isNaN(usd) ? 0 : usd);
        }, [formik.values.exchangeRate, formik.values.amountBs]); */

    useEffect(() => {
        formik.setFieldValue('exchangeRate', exchangeRate?.rate || 0);
    }, [exchangeRate]);



    return <Box paddingX={'5%'} paddingY={'2.5%'}>
        <Text color='secondary.500' fontWeight={'bold'} fontSize={'Ls'}>CREAR NOTA DE CRÉDITO</Text>
        <form onSubmit={formik.handleSubmit}>
            <Grid templateColumns={'repeat(12,1fr)'} gap={'10px'} marginY={'3%'}>
                <GridItem colSpan={6}>
                    <FormControl id='number' isInvalid={!!formik.errors.number} >
                        <FormLabel as='legend'>N° Nota crédito</FormLabel>
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
                        <DebouncedInput
                            debounceTime={250}
                            type="number"
                            value={formik.values.exchangeRate?.toString() || ''}
                            onChange={(v) => formik.setFieldValue('exchangeRate', v || '')}
                            name="exchangeRate" />
                        <FormErrorMessage>{formik.errors.exchangeRate}</FormErrorMessage>
                    </FormControl>
                </GridItem>
                <GridItem colSpan={6}>
                    <FormControl isInvalid={!!formik.errors.amountUsd} >
                        <FormLabel as='legend'>Monto USD</FormLabel>
                        <DebouncedInput
                            debounceTime={250}
                            name="amountUsd"
                            type="number"
                            onChange={(v) => formik.setFieldValue('amountUsd', v)}
                            value={formik.values.amountUsd.toString()} />
                        <FormErrorMessage>{formik.errors.amountUsd}</FormErrorMessage>
                    </FormControl>
                </GridItem>
                <GridItem colSpan={6}>
                    <FormControl isInvalid={!!formik.errors.amountBs} >
                        <FormLabel as='legend'>Monto Bs</FormLabel>
                        <DebouncedInput
                            debounceTime={250}
                            name="amountBs"
                            type="number"
                            onChange={(v) => formik.setFieldValue('amountBs', v)}
                            value={formik.values.amountBs.toString()} />
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
                    <Button isLoading={loading} colorScheme="secondary" type='submit'>Crear nota de crédito</Button>
                </GridItem>
            </Grid>
        </form>
    </Box>
}

export type CreateCreditNoteValues = {
    invoiceId: string,
    number: number;
    date: string;
    amountUsd: number;
    amountBs: number;
    observation: string;
    exchangeRate: number;
}

function validateCreateClientForm(values: CreateCreditNoteValues) {

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