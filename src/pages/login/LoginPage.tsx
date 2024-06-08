import { Box } from "@chakra-ui/react";
import { LoginForm } from "./partials/LoginForm";
import useSession from "../../hooks/useSession";
import { Navigate } from "react-router-dom";
import LoginHeader from "./partials/LoginHeader";

export default function LoginPage() {

    const { isLoggedIn } = useSession()

    if (isLoggedIn) {
        return <Navigate to="/" />
    }

    return (<Box
        boxSizing="border-box"
        w='100%' h='98vh'>
        <LoginHeader />
        <Box display={'grid'} placeContent={'center'}>
            <LoginForm />
        </Box>
    </Box>)
}