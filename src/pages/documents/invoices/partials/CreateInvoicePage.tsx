import { Box, Button, FormControl, FormErrorMessage, FormLabel, Grid, GridItem, Input, NumberInput, NumberInputField, NumberInputStepper, Select, Text, useToast } from "@chakra-ui/react";
import { useFormik } from "formik";
import useSaveInvoice from "../../../../hooks/useSaveInvoice";
import ClientSelect from "../../../../components/ClientSelect";
import moment from "moment";
import { PaymentCondition } from "../../../../enums/PaymentCondition";
import SellerSelect from "../../../../components/SellerSelect";
import { useCurrencyExchange } from "../../../../hooks/useExchangeRate";

export default function CreateInvoicePage({ initialValues }: { initialValues?: CreateInvoiceValues }) {

    const { saveInvoice, loading, error } = useSaveInvoice();
    const toast = useToast();

    const formik = useFormik<CreateInvoiceValues>({
        initialValues: initialValues || {
            number: 0,
            date: moment().format('YYYY-MM-DD'),
            amountUsd: 0,
            amountBs: 0,
            clientId: "",
            sellerId: "",
            paymentCondition: PaymentCondition.COUNTED,
            creditDays: 0,
            observation: "",
        },
        validate: validateCreateClientForm,
        validateOnChange: true,
        onSubmit: async (values) => {
            await saveInvoice(values);
            toast({
                title: error ? 'Error al crear la Factura' : "Factura creado",
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
                <GridItem colSpan={3}>
                    <FormControl isInvalid={!!formik.errors.amountUsd} >
                        <FormLabel as='legend'>Monto USD</FormLabel>
                        <NumberInput defaultValue={0}>
                            <NumberInputField
                                value={formik.values.amountUsd}
                                onChange={(e) => formik.setFieldValue('amountUsd', Number.parseFloat(e.currentTarget.value))}
                                name="amountUsd" />
                        </NumberInput>
                        <FormErrorMessage>{formik.errors.amountUsd}</FormErrorMessage>
                    </FormControl>
                </GridItem>
                <GridItem colSpan={3}>
                    <FormControl isInvalid={!!formik.errors.amountBs} >
                        <FormLabel as='legend'>Monto Bs</FormLabel>
                        <NumberInput defaultValue={0}>
                            <NumberInputField
                                value={formik.values.amountBs}
                                onChange={(e) => formik.setFieldValue('amountBs', Number.parseFloat(e.currentTarget.value))}
                                name="amountBs" />
                        </NumberInput>
                        <FormErrorMessage>{formik.errors.amountUsd}</FormErrorMessage>
                    </FormControl>
                </GridItem>
                <GridItem colSpan={3}>
                    Select tasa de cambio
                </GridItem>
                <GridItem colSpan={3}>
                    Input tasa de cambio (manual)
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
}

function validateCreateClientForm(values: CreateInvoiceValues) {
    return {}
}