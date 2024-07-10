import { Button, Flex, Icon } from "@chakra-ui/react";
import { MdArrowBack } from "react-icons/md";
import { useLocation } from "react-router-dom";

export default function SubNavigationBar() {

    const { pathname } = useLocation();
    const hideOnRoutes = ['/'];
    const goBack = () => {
        window.history.back();
    }

    if (hideOnRoutes.includes(pathname)) return null;

    return <Flex gap={'15px'} w='100%' paddingY={'15px'} paddingX={'10px'} >
        <Button onClick={() => goBack()} leftIcon={<Icon as={MdArrowBack} />} paddingY={"15px"} variant={'navigation'} size={'xs'}>Regresar</Button>
    </Flex>
}