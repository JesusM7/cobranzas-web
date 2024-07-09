import { Box, Button, FormControl, FormErrorMessage, FormLabel, Grid, GridItem, Input, Text, useToast } from "@chakra-ui/react";
import { useFormik } from "formik";
import useSaveSeller from "../../hooks/useSaveSeller";



export default function CreateSellerPage({ initialValues }: { initialValues?: CreateSellerValues }) {

    const { saveSeller, loading, error } = useSaveSeller();
    const toast = useToast();

    const formik = useFormik<CreateSellerValues>({
        initialValues: initialValues || {
            name: "",
            phoneNumber: "",
            documentId: "",
            email: "",
        },

        validate: validateCreateSellerForm,
        validateOnChange: true,
        onSubmit: async (values) => {
            await saveSeller(values);
            toast({
                title: error ? 'Error al crear vendedor' : "Vendedor creado",
                description: error ? 'El vendedor no pudo ser creado' : "El vendedor fue creado exitosamente",
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
        <Text color='secondary.500'
            fontWeight={'bold'} fontSize={'xx-large'}>Crear Vendedor</Text>
        <form onSubmit={formik.handleSubmit}>
            <Grid templateColumns={'repeat(12,1fr)'} gap={'10px'} marginY={'3%'}>
                <GridItem colSpan={6}>
                    <FormControl isInvalid={!!formik.errors.name} >
                        <FormLabel as='legend'>Nombre</FormLabel>
                        <Input
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            name="name"
                        />
                        <FormErrorMessage>{formik.errors.name}</FormErrorMessage>
                    </FormControl>
                </GridItem>
                <GridItem colSpan={6}>
                    <FormControl isInvalid={!!formik.errors.phoneNumber}>
                        <FormLabel as='legend'>Número de Teléfono</FormLabel>
                        <Input
                            value={formik.values.phoneNumber}
                            onChange={formik.handleChange}
                            name="phoneNumber"
                        />
                        <FormErrorMessage>{formik.errors.phoneNumber}</FormErrorMessage>
                    </FormControl>
                </GridItem>
                <GridItem colSpan={6}>
                    <FormControl id='documentId' isInvalid={!!formik.errors.documentId}>
                        <FormLabel as='legend'>Número de Cedula</FormLabel>
                        <Input
                            value={formik.values.documentId}
                            onChange={formik.handleChange}
                            name="documentId"
                        />
                        <FormErrorMessage>{formik.errors.documentId}</FormErrorMessage>
                    </FormControl>
                </GridItem>
                <GridItem colSpan={6}>
                    <FormControl isInvalid={!!formik.errors.email}>
                        <FormLabel as='legend'>Correo electrónico</FormLabel>
                        <Input
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            name="email"
                            type="email"
                        />
                        <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
                    </FormControl>
                </GridItem>
                <GridItem colSpan={12}>
                    <Button isLoading={loading} colorScheme="secondary" type='submit'>Crear Vendedor</Button>
                </GridItem>
            </Grid>
        </form>
    </Box>
}

export type CreateSellerValues = {
    name: string,
    phoneNumber: string,
    documentId: string,
    email: string
}

function validateCreateSellerForm(values: CreateSellerValues) {
    if (!values.name) {
        return { name: "El nombre es requerido" };
    }
    if (values.name.length < 3) {
        return { name: "El nombre no puede ser menor a 3 letras" };
    }
    if (!values.phoneNumber) {
        return { phoneNumber: "El Número de Teléfono es requerido" };
    }
    if (!values.documentId) {
        return { documentId: "El número de cedula es requerido" };
    }
    if (values.documentId.length < 7) {
        return { documentId: "El nombre no puede ser menor a 7 digitos" };
    }
    if (!values.email) {
        return { email: "El Correo electrónico es requerido" };
    }
}


