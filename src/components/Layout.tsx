import { Outlet } from "react-router-dom";
import LoginHeader from "../pages/login/partials/LoginHeader";
import { Box } from "@chakra-ui/react";

export default function Layout() {
    return (
        <div>
            <LoginHeader />
            <Box>
                <Outlet />
            </Box>
            <h1>Footer</h1>
        </div>
    );
}