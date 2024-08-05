import { Box, Button, Flex, Icon, Spacer, Stack, Text } from "@chakra-ui/react";
import { MdAdd } from "react-icons/md";
import { Link } from "react-router-dom";
import InvoiceList from "./partials/InvoiceList";

export default function InvoicePage() {
    return <Box>
        <Stack>
            <Flex p='20px' alignItems={'center'}>
                <Text fontWeight={'bold'} color='secondary.500' fontSize={'xx-large'}>Facturas</Text>
                <Spacer />
                <Link to='/crear-factura'>
                    <Button leftIcon={<Icon as={MdAdd} />} colorScheme='secondary' size={"sm"}>Agregar Factura</Button>
                </Link>
            </Flex>
            <InvoiceList />
        </Stack>
    </Box>
}