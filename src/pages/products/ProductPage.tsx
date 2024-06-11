import { Box, Button, Flex, Icon, Spacer, Stack, Text } from "@chakra-ui/react";
import { MdAdd } from "react-icons/md";
import { Link } from "react-router-dom";
import ProductList from "./partials/ProductList";

export default function ProductPage() {
    return <Box>
        <Stack>
            <Flex p='20px' alignItems={'center'}>
                <Text fontWeight={'bold'} color='secondary.500' fontSize={'xx-large'}>Productos</Text>
                <Spacer />
                <Link to='/crear-producto'>
                    <Button leftIcon={<Icon as={MdAdd} />} colorScheme='secondary'>Agregar Producto</Button>
                </Link>
            </Flex>
            <ProductList />
        </Stack>
    </Box>
}