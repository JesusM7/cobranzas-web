import { Flex, Img, Spacer, Stack, Text } from "@chakra-ui/react";
import Logo from '../../../assets/logo-meru.png';

export default function LoginHeader() {
    return <Flex marginBottom='40px'>
        <Stack spacing={1}>
            <Text
                margin={0}
                fontWeight={'bold'}
                fontSize='xxx-large'>
                Alimentos Meru
            </Text>
            <Text fontWeight={'bold'}>
                Cobranzas
            </Text>
        </Stack>

        <Spacer />
        <Img h='64px' src={Logo} alt='Logo Meru' />
    </Flex>
}