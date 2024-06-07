import axios from "axios"
import { useState } from "react"
import { config } from "../config"
import { useToast } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"

export default function useLogin() {

    const [username, setUsername] = useState<string | undefined>()
    const [password, setPassword] = useState<string | undefined>()
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const toast = useToast()
    const navigate = useNavigate()

    const handleSubmit = async () => {
        try {
            setIsLoading(true)
            const { data } = await axios.post<SessionData>(`${config.api}/api/v1/users/login`, {
                username,
                password
            })
            localStorage.setItem('token', data.token)
            localStorage.setItem('user', JSON.stringify(data.user))
            navigate('/')
        } catch (error: any) {
            toast({
                colorScheme: 'red',
                title: 'Error',
                description: error?.response?.data.message
            })
        } finally {
            setIsLoading(false)
        }
    }

    return {
        setUsername,
        setPassword,
        isLoading,
        handleSubmit
    }

}

export interface SessionData {
    token: string
    user: User
}

export interface User {
    username: string
    email: string
    name: string
    documentId: string
    id: string
}
