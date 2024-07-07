import { Box, Button, Flex, Icon, Spacer, Stack, Text } from "@chakra-ui/react";
import { MdAdd } from "react-icons/md";
import { Link } from "react-router-dom";
import CreditNotelist from "./partials/CreditNoteList";

export default function InvoicePage() {
    return <Box>
        <Stack>
            <Flex p='20px' alignItems={'center'}>
                <Text fontWeight={'bold'} color='secondary.500' fontSize={'xx-large'}>Notas de crédito</Text>
                <Spacer />
                <Link to='/crear-nota-de-credito'>
                    <Button leftIcon={<Icon as={MdAdd} />} colorScheme='secondary'>Agregar nota de crédito</Button>
                </Link>   
            </Flex>
            <CreditNotelist/>
        </Stack>
    </Box>
}