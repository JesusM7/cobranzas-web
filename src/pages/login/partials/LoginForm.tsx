import { Box, Button, Input, Stack, Text } from "@chakra-ui/react";
import useLogin from "../../../hooks/useLogin";

export function LoginForm() {

    const {
        handleSubmit,
        isLoading,
        setPassword,
        setUsername,
    } = useLogin()

    return <Box
        bg='primary.900'
        w={'600px'}
        p={'5%'}
        borderRadius={'lg'}>
        <Stack spacing={'20px'}>
            <Text
                my='5%'
                color='#fff' fontWeight={'light'} textAlign={'center'} fontSize={'xx-large'}>
                Iniciar Sesión
            </Text>
            <Input onChange={(e) => setUsername(e.currentTarget.value)} bg="white" placeholder="Usuario" />
            <Input type='password' onChange={(e) => setPassword(e.currentTarget.value)} bg="white" placeholder="Contraseña" />
            <Button isLoading={isLoading} onClick={() => handleSubmit()} colorScheme="red">Entrar</Button>
            <Button color="white" variant={'link'}>Recuperar contraseña</Button>
        </Stack>
    </Box>
}