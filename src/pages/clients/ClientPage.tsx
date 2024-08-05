import { Box, Button, Flex, Icon, Spacer, Stack, Text } from "@chakra-ui/react";
import ClientList from "./partials/ClientList";
import { MdAdd } from "react-icons/md";
import { Link } from "react-router-dom";

export default function ClientPage() {
    return <Box>
        <Stack>
            <Flex p='20px' alignItems={'center'}>
                <Text fontWeight={'bold'} color='secondary.500' fontSize={'xx-large'}>Clientes</Text>
                <Spacer />
                <Link to='/crear-cliente'>
                    <Button leftIcon={<Icon as={MdAdd} />} colorScheme='secondary' size={"sm"}>Agregar Cliente</Button>
                </Link>
            </Flex>
            <ClientList />
        </Stack>
    </Box>
}