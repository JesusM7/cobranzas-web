import { Box, Button, FormControl, FormErrorMessage, FormLabel, Grid, GridItem, Input, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, Text, useToast } from "@chakra-ui/react";
import { useFormik } from "formik";
import useSaveProduct from "../../hooks/useSaveProduct";



export default function CreateProductPage({ initialValues }: { initialValues?: CreateProductValues }) {

    const { saveProduct, loading, error } = useSaveProduct();
    const toast = useToast();

    const formik = useFormik<CreateProductValues>({
        initialValues: initialValues || {
            sku: "",
            name: "",
            price: 0,
            weightKg: 0,
        },

        validate: validateCreateProductForm,
        validateOnChange: true,
        onSubmit: async (values) => {
            await saveProduct(values);
            toast({
                title: error ? 'Error al crear producto' : "Producto creado",
                description: error ? 'El producto no pudo ser creado' : "El producto fue creado exitosamente",
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
            fontWeight={'bold'} fontSize={'xx-large'}>Crear producto</Text>
        <form onSubmit={formik.handleSubmit}>
            <Grid templateColumns={'repeat(12,1fr)'} gap={'10px'} marginY={'3%'}>
                <GridItem colSpan={6}>
                    <FormControl id='sku' isInvalid={!!formik.errors.sku} >
                        <FormLabel as='legend'>SKU</FormLabel>
                        <Input
                            value={formik.values.sku}
                            onChange={formik.handleChange}
                            name="sku"
                        />
                        <FormErrorMessage>{formik.errors.sku}</FormErrorMessage>
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
                    <FormControl isInvalid={!!formik.errors.price} >
                        <FormLabel as='legend'>Precio unitario</FormLabel>
                        <NumberInput defaultValue={0} precision={2} step={0.2}>
                            <NumberInputField
                                value={formik.values.price}
                                onChange={(e) => formik.setFieldValue('price', Number.parseFloat(e.currentTarget.value))}
                                name="price" />
                            <NumberInputStepper>
                                <NumberIncrementStepper />
                                <NumberDecrementStepper />
                            </NumberInputStepper>
                        </NumberInput>
                        <FormErrorMessage>{formik.errors.price}</FormErrorMessage>
                    </FormControl>
                </GridItem>
                <GridItem colSpan={6}>
                    <FormControl isInvalid={!!formik.errors.weightKg}>
                        <FormLabel as='legend'>Peso Kg</FormLabel>
                        <NumberInput defaultValue={0} precision={2} step={0.2}>
                            <NumberInputField
                                value={formik.values.weightKg}
                                onChange={(e) => formik.setFieldValue('weightKg', Number.parseFloat(e.currentTarget.value))}
                                name="weightKg" />
                            <NumberInputStepper>
                                <NumberIncrementStepper />
                                <NumberDecrementStepper />
                            </NumberInputStepper>
                        </NumberInput>
                        <FormErrorMessage>{formik.errors.weightKg}</FormErrorMessage>
                    </FormControl>
                </GridItem>
                <GridItem colSpan={12}>
                    <Button isLoading={loading} colorScheme="secondary" type='submit'>Crear Producto</Button>
                </GridItem>
            </Grid>
        </form>
    </Box>
}

export type CreateProductValues = {
    sku: string;
    name: string;
    price: number;
    weightKg: number;
}

function validateCreateProductForm(values: CreateProductValues) {
    if (!values.sku) {
        return { sku: "El sku es requerido" };
    }
    if (!values.name) {
        return { name: "El nombre es requerido" };
    }
    if (values.name.length < 3) {
        return { name: "El nombre no puede ser menor a 3 letras" };
    }
    if (!values.weightKg) {
        return { weightKg: "El peso del producto es requerido" };
    }
}


