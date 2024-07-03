import { Outlet } from "react-router-dom";
import { Box, Flex } from "@chakra-ui/react";
import PageHeader from "./PageHeader";
import Footer from "./Footer";
import NavigationBar from "./navigator/NavigationBar";
import SubNavigationBar from "./navigator/SubNavigationBar";

export default function Layout() {
    return (
        <Flex flexDirection={"column"} height={"100vh"}>
            <PageHeader />
            <NavigationBar />
            <SubNavigationBar />
            <Box flex={1}>
                <Outlet />
            </Box>
            <Footer />
        </Flex>
    );
}