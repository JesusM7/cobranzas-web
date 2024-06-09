import { Flex, Img, Spacer, Stack, Text } from "@chakra-ui/react";
import Logo from '../assets/logo-meru.png';
import UserMenu from "./UserMenu";

export default function PageHeader() {

    return <Stack paddingY='15px' bg='primary.900'>
        <Flex alignItems={'center'} paddingX={'2.5%'} gap={'2ch'}>
            <Img h='64px' src={Logo} alt='Logo Meru' />
            <Stack spacing={1}>
                <Text
                    fontFamily={'Lato'}
                    color='white'
                    margin={0}
                    fontSize='xx-large'>
                    Cobranzas
                </Text>
            </Stack>
            <Spacer />
            <UserMenu />
        </Flex>
    </Stack>
}