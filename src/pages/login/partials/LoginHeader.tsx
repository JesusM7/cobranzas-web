import { Avatar, Flex, HStack, Img, Spacer, Stack, Text } from "@chakra-ui/react";
import Logo from '../../../assets/logo-meru.png';
import useSession from "../../../hooks/useSession";

export default function LoginHeader() {

    const { user } = useSession()

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
        <HStack spacing={2}>
            <Text color='white'>
                {user?.name}
            </Text>
            <Avatar size='md' name={user?.name} />
        </HStack>
    </Flex>
}