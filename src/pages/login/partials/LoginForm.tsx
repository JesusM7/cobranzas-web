import { Box, Button, Input, Stack, Text } from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { config } from "../../../config";

export function LoginForm() {

    const [username, setUsername] = useState<string | undefined>()
    const [password, setPassword] = useState<string | undefined>()
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const handleSubmit = async () => {
        setIsLoading(true)
        const { data, status } = await axios.post(`${config.api}/api/v1/users/login`, {
            username,
            password
        })
        setIsLoading(false)
        console.log(data, status)
    }

    return <Box
        bg='blue.900'
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
        </Stack>
    </Box>
}