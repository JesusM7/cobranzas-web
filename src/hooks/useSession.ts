import { useEffect, useState } from "react";
import { User } from "./useLogin";
import { useNavigate } from "react-router-dom";

export default function useSession() {
    const [token, setToken] = useState<string | null>(localStorage.getItem('token'))
    const [user, setUser] = useState<User | null>(
        localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user') as string) : null
    )
    const navigate = useNavigate()

    const logout = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        setToken(null)
        setUser(null)
        navigate('/login')
    }

    useEffect(() => {
        const token = localStorage.getItem('token')
        const user = localStorage.getItem('user')
        if (!token || !user) {
            return
        }
        const decodedToken = decodeJwt(token)
        const currentTime = Date.now() / 1000
        if (decodedToken.exp < currentTime) {
            logout()
        } else {
            setToken(token)
            setUser(JSON.parse(user))
        }

    }, [token, user])

    return {
        token,
        user,
        logout,
        isLoggedIn: !!token && !!user,
    }

}

function decodeJwt(token: string) {
    const payload = token.split('.')[1]
    const decodedPayload = atob(payload)
    return JSON.parse(decodedPayload)
}