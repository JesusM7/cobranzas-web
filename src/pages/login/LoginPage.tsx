import { Box } from "@chakra-ui/react";
import LoginHeader from "./partials/LoginHeader";
import { LoginForm } from "./partials/LoginForm";
import useSession from "../../hooks/useSession";
import { Navigate } from "react-router-dom";

export default function LoginPage() {

    const { isLoggedIn } = useSession()

    if (isLoggedIn) {
        return <Navigate to="/" />
    }

    return (<Box
        boxSizing="border-box"
        padding={'2%'}
        w='100%' h='98vh'>
        <LoginHeader />
        <Box display={'grid'} placeContent={'center'}>
            <LoginForm />
        </Box>
    </Box>)
}