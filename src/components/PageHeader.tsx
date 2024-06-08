import {Flex, Img, Spacer, Stack, Text } from "@chakra-ui/react";
import Logo from '../assets/logo-meru.png';
import UserMenu from "./UserMenu";

export default function PageHeader() {

    return <Flex marginBottom='40px' bg='blue.900' alignItems={'center'} paddingX={'2.5%'} gap={'2ch'}>
        <Img h='64px' src={Logo} alt='Logo Meru' />
        <Stack spacing={1}>
            <Text
                color='white'
                margin={0}
                fontWeight={'bold'}
                fontSize='xxx-large'>
                Alimentos Meru
            </Text>
            <Text fontWeight={'bold'} color='white'>
                Cobranzas
            </Text>
        </Stack>
        <Spacer />
        <UserMenu />
    </Flex>
}