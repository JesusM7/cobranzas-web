import { Flex, Img, Spacer, Text } from "@chakra-ui/react";
import Logo from '../../../assets/logo-meru.png';

export default function LoginHeader() {
    return <Flex marginBottom='40px'>
        <Text
            margin={0}
            fontWeight={'bold'}
            fontSize='xxx-large'>
            Alimentos Meru
        </Text>
        <Spacer />
        <Img h='64px' src={Logo} alt='Logo Meru' />
    </Flex>
}