import { Box, Button, Flex, Icon, Spacer, Stack, Text } from "@chakra-ui/react";
import { MdAdd } from "react-icons/md";
import { Link } from "react-router-dom";
import SellerList from "./SellerList";

export default function SellerPage() {
    return <Box>
        <Stack>
            <Flex p='20px' alignItems={'center'}>
                <Text fontWeight={'bold'} color='secondary.500' fontSize={'xx-large'}>Vendedores</Text>
                <Spacer />
                <Link to='/crear-vendedor'>
                    <Button leftIcon={<Icon as={MdAdd} />} colorScheme='secondary'>Agregar Vendedor</Button>
                </Link>
            </Flex>
            <SellerList />
        </Stack>
    </Box>
}