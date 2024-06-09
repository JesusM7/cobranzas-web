import { Outlet } from "react-router-dom";
import { Box, Flex } from "@chakra-ui/react";
import PageHeader from "./PageHeader";
import Footer from "./Footer";
import NavigationBar from "./navigator/NavigationBar";

export default function Layout() {
    return (
        <Flex flexDirection={"column"} height={"100vh"}>
            <PageHeader />
            <NavigationBar />
            <Box flex={1}>
                <Outlet />
            </Box>
            <Footer />
        </Flex>
    );
}