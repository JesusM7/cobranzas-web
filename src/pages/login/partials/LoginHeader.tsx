import { Flex, Img, Spacer, Stack, Text } from "@chakra-ui/react";
import Logo from '../../../assets/logo-meru.png';

export default function LoginHeader() {

    return <Flex marginBottom='40px' bg='primary.900' alignItems={'center'} padding={'1%'} gap={'2ch'}>
        <Img h='64px' src={Logo} alt='Logo Meru' />
        <Stack spacing={2}>
            <Text
                color='white'
                margin={0}
                fontWeight={'bold'}
                fontSize='xx-large'>
                Alimentos Meru
            </Text>
        </Stack>
        <Spacer />
    </Flex>
}