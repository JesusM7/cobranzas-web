import { Box } from "@chakra-ui/react";
import LoginHeader from "./partials/LoginHeader";
import { LoginForm } from "./partials/LoginForm";

export default function LoginPage() {
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