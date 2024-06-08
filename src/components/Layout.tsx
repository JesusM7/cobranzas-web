import { Outlet } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import PageHeader from "./PageHeader";

export default function Layout() {
    return (
        <div>
            <PageHeader />
            <Box>
                <Outlet />
            </Box>
            <h1>Footer</h1>
        </div>
    );
}