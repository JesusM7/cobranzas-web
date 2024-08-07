import { Box, Button, FormControl, FormErrorMessage, FormLabel, Grid, GridItem, Input, Text, useToast } from "@chakra-ui/react";
import { useFormik } from "formik";
import StateSelect from "../../components/StateSelect";
import MunicipalitySelect from "../../components/MuncipalitySelect";
import { useState } from "react";
import useSaveClient from "../../hooks/useSaveClient";
import CitySelect from "../../components/CitySelect";

export default function CreateClientPage({ initialValues }: { initialValues?: CreateClientValues }) {

    const [stateId, setStateId] = useState<string>("amazonas");
    const { saveClient, loading, error } = useSaveClient();
    const toast = useToast();

    const formik = useFormik<CreateClientValues>({
        initialValues: initialValues || {
            name: "",
            email: "",
            phoneNumber: "",
            address: "",
            municipalityId: "",
            rif: "",
            cityId: "",
        },
        validate: validateCreateClientForm,
        validateOnChange: true,
        onSubmit: async (values) => {
            await saveClient(values);
            toast({
                title: error ? 'Error al crear cliente' : "Cliente creado",
                description: error ? 'El cliente no pudo ser creado' : "El cliente fue creado exitosamente",
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
        <Text color='secondary.500' fontWeight={'bold'} fontSize={'xx-large'}>Crear cliente</Text>
        <form onSubmit={formik.handleSubmit}>
            <Grid templateColumns={'repeat(12,1fr)'} gap={'10px'} marginY={'3%'}>
                <GridItem colSpan={6}>
                    <FormControl id='rif' isInvalid={!!formik.errors.rif} >
                        <FormLabel as='legend'>RIF</FormLabel>
                        <Input
                            placeholder="J123456789"
                            value={formik.values.rif}
                            onChange={formik.handleChange}
                            name="rif"
                        />
                        <FormErrorMessage>{formik.errors.rif}</FormErrorMessage>
                    </FormControl>
                </GridItem>
                <GridItem colSpan={6}>
                    <FormControl isInvalid={!!formik.errors.name}>
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
                    <FormControl isInvalid={!!formik.errors.phoneNumber} >
                        <FormLabel as='legend'>Telefono</FormLabel>
                        <Input
                            value={formik.values.phoneNumber}
                            onChange={formik.handleChange}
                            name="phoneNumber"
                        />
                        <FormErrorMessage>{formik.errors.phoneNumber}</FormErrorMessage>
                    </FormControl>
                </GridItem>
                <GridItem colSpan={6}>
                    <FormControl isInvalid={!!formik.errors.email}>
                        <FormLabel as='legend'>Correo</FormLabel>
                        <Input
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            name="email"
                            type="email"
                        />
                        <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
                    </FormControl>
                </GridItem>
                <GridItem colSpan={6}>
                    <FormControl>
                        <FormLabel as='legend'>Estado</FormLabel>
                        <StateSelect onChange={(e) => setStateId(e.currentTarget.value)} name='stateId' />
                    </FormControl>
                </GridItem>
                <GridItem colSpan={6}>
                    <FormControl isInvalid={!!formik.errors.municipalityId} >
                        <FormLabel as='legend'>Municipio</FormLabel>
                        <MunicipalitySelect onChange={formik.handleChange} name='municipalityId' stateId={stateId} />
                        <FormErrorMessage>{formik.errors.municipalityId}</FormErrorMessage>
                    </FormControl>
                </GridItem>
                <GridItem colSpan={6}>
                    <FormControl isInvalid={!!formik.errors.cityId} >
                        <FormLabel as='legend'>Ciudad</FormLabel>
                        <CitySelect onChange={formik.handleChange} name='cityId' stateId={stateId} />
                        <FormErrorMessage>{formik.errors.cityId}</FormErrorMessage>
                    </FormControl>
                </GridItem>
                <GridItem colSpan={12}>
                    <FormControl isInvalid={!!formik.errors.address} >
                        <FormLabel as='legend'>Dirección</FormLabel>
                        <Input
                            value={formik.values.address}
                            onChange={formik.handleChange}
                            name="address"
                        />
                        <FormErrorMessage>{formik.errors.address}</FormErrorMessage>
                    </FormControl>
                </GridItem>
                <GridItem colSpan={12}>
                    <Button isLoading={loading} colorScheme="secondary" type='submit'>Crear Cliente</Button>
                </GridItem>
            </Grid>
        </form>
    </Box>
}

export type CreateClientValues = {
    rif: string;
    name: string;
    email: string;
    phoneNumber: string;
    address: string;
    municipalityId: string;
    cityId: string;
}

function validateCreateClientForm(values: CreateClientValues) {

    if (!values.rif) {
        return { rif: "El rif es requerido" };
    }
    if (['V', 'J', 'E', 'G'].indexOf(values.rif[0].toUpperCase()) === -1) {
        return { rif: "El rif debe comenzar con V, J, E o G" };
    }
    if (!values.name) {
        return { name: "El nombre es requerido" };
    }
    if (values.name.length < 3) {
        return { name: "El nombre no puede ser menor a 3 letras" };
    }
    if (!values.phoneNumber) {
        return { phoneNumber: "Debe ingresar un numero de telefono" }
    }
    if (!values.email.includes("@")) {
        return { email: "Debe ingresar un Correo valido" }
    }
    if (!values.address) {
        return { address: "Debe ingresar una dirección" }
    }
    if (!values.municipalityId) {
        return { municipalityId: "Debe seleccionar un municipio" }
    }
}