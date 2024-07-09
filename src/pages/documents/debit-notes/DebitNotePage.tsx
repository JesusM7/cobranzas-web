import { Box, Button, Flex, Icon, Spacer, Stack, Text } from "@chakra-ui/react";
import { MdAdd } from "react-icons/md";
import { Link } from "react-router-dom";
import DebitNotelist from "./partials/DebitNoteList";


export default function DebitNotePage() {
    return <Box>
        <Stack>
            <Flex p='20px' alignItems={'center'}>
                <Text fontWeight={'bold'} color='secondary.500' fontSize={'xx-large'}>Notas de débito</Text>
                <Spacer />
                <Link to='/crear-nota-de-credito'>
                    <Button leftIcon={<Icon as={MdAdd} />} colorScheme='secondary'>Agregar nota de débito</Button>
                </Link>   
            </Flex>
            <DebitNotelist />
        </Stack>
    </Box>
}