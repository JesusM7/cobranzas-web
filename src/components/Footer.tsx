import { Box, Text } from "@chakra-ui/react";

export default function Footer() {
    return (

        <Box bg={"blue.800"} padding={"30px"} >
            <Text color={"white"} textAlign={"center"} >© Alimentos Merú {new Date().getFullYear()} </Text>
        </Box>

    )
}