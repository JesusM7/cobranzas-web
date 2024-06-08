import { Outlet } from "react-router-dom";
import { Box, Flex } from "@chakra-ui/react";
import PageHeader from "./PageHeader";
import Footer from "./Footer";
import NavegationBar from "./NavegationBar";

export default function Layout() {
    return (
        <Flex flexDirection={"column"} height={"100vh"}>
            <PageHeader />
            <NavegationBar />
            <Box flex={1}>
                <Outlet />
            </Box>
            <Footer />
        </Flex>
    );
}