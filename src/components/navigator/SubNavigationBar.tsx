import { Button, Center, Flex, Icon } from "@chakra-ui/react";
import { MdArrowBack } from "react-icons/md";

export default function SubNavigationBar() {

    const goBack = () => {
        window.history.back();
    }

    return <Flex gap={'15px'} w='100%' paddingY={'15px'} paddingX={'10px'} >
        <Button onClick={() => goBack()} leftIcon={<Icon as={MdArrowBack} />} paddingY={"15px"} variant={'navigation'} size={'xs'}>Regresar</Button>
    </Flex>
}