import { useEffect, useState } from "react";
import { User } from "./useLogin";

export default function useSession() {
    const [token, setToken] = useState<string | null>(null)
    const [user, setUser] = useState<User | null>(null)

    const logout = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        setToken(null)
        setUser(null)
        window.location.reload()
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