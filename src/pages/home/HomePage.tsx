import { Button } from "@chakra-ui/react"
import useSession from "../../hooks/useSession"

export default function HomePage() {

    const { user, logout } = useSession()

    return <div>
        Hola, {user?.name}
        <Button onClick={() => logout()}>Cerrar sesion</Button>
    </div>
}