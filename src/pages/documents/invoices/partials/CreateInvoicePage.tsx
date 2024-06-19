import { Box, Button, FormControl, FormErrorMessage, FormLabel, Grid, GridItem, Input, Text, useToast } from "@chakra-ui/react";
import { useFormik } from "formik";
import useSaveInvoice from "../../../../hooks/useSaveInvoice";

export default function CreateInvoicePage({ initialValues }: { initialValues?: CreateInvoiceValues }) {

    const {saveInvoice, loading, error } = useSaveInvoice(); 
    const toast = useToast();

    const formik = useFormik<CreateInvoiceValues>({
        initialValues: initialValues || {
            number: 0,
            client: "",
            date: "",
            expirationDate: "",
            amountUsd: 0,
            amountBs: 0,
            paymentCondition: "",
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
                        <Input
                            placeholder="000000"
                            value={formik.values.number}
                            onChange={formik.handleChange}
                            name="number"
                        />
                        <FormErrorMessage>{formik.errors.number}</FormErrorMessage>
                    </FormControl>
                </GridItem>
                <GridItem colSpan={6}>
                    <FormControl isInvalid={!!formik.errors.client}>
                        <FormLabel as='legend'>Cliente</FormLabel>
                        <Input
                            value={formik.values.client}
                            onChange={formik.handleChange}
                            name="client"
                        />
                        <FormErrorMessage>{formik.errors.client}</FormErrorMessage>
                    </FormControl>
                </GridItem>
                <GridItem colSpan={6}>
                    <FormControl isInvalid={!!formik.errors.date} >
                        <FormLabel as='legend'>Fecha de Emisión</FormLabel>
                        <Input
                            value={formik.values.date}
                            onChange={formik.handleChange}
                            name="date"
                        />
                        <FormErrorMessage>{formik.errors.date}</FormErrorMessage>
                    </FormControl>
                </GridItem>
                <GridItem colSpan={6}>
                    <FormControl isInvalid={!!formik.errors.expirationDate}>
                        <FormLabel as='legend'>Fecha de Vencimiento</FormLabel>
                        <Input
                            value={formik.values.expirationDate}
                            onChange={formik.handleChange}
                            name="expirationDate"
                        />
                        <FormErrorMessage>{formik.errors.expirationDate}</FormErrorMessage>
                    </FormControl>
                </GridItem>
                <GridItem colSpan={6}>
                    <FormControl isInvalid={!!formik.errors.amountUsd} >
                        <FormLabel as='legend'>Monto USD</FormLabel>
                        <Input
                            value={formik.values.amountUsd}
                            onChange={formik.handleChange}
                            name="amountUsd"
                        />
                        <FormErrorMessage>{formik.errors.amountUsd}</FormErrorMessage>
                    </FormControl>
                </GridItem>
                <GridItem colSpan={6}>
                    <FormControl isInvalid={!!formik.errors.amountBs} >
                        <FormLabel as='legend'>Monto Bs</FormLabel>
                        <Input
                            value={formik.values.amountBs}
                            onChange={formik.handleChange}
                            name="amountBs"
                        />
                        <FormErrorMessage>{formik.errors.amountUsd}</FormErrorMessage>
                    </FormControl>
                </GridItem>
                <GridItem colSpan={6}>
                    <FormControl isInvalid={!!formik.errors.paymentCondition} >
                        <FormLabel as='legend'>Condición de pago</FormLabel>
                        <Input
                            value={formik.values.paymentCondition}
                            onChange={formik.handleChange}
                            name="paymentCondition"
                        />
                        <FormErrorMessage>{formik.errors.paymentCondition}</FormErrorMessage>
                    </FormControl>
                </GridItem>
                <GridItem colSpan={6}>
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
    client: string;
    date: string;
    expirationDate: string;
    amountUsd: number;
    amountBs: number,
    paymentCondition: string;
    creditDays: number;
    observation: string;
}

function validateCreateClientForm(values: CreateInvoiceValues) {
    return values
}