import { Box } from "@chakra-ui/react"
import useSession from "../hooks/useSession"


export default function LogoutButton() {

    const { logout } = useSession()

    return <Box onClick={() => logout()} width={"100%"}>Cerrar sesión</Box>
}