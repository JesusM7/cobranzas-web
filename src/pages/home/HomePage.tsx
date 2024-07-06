import { Flex } from "@chakra-ui/react";
import HomePageCards from "./partials/HomePageCards";
import HomePageList from "./partials/HomePageList";

export default function HomePage() {

    return (
        <Flex flexDir={'column'} gap='10px' padding={'10px'}>
            <HomePageCards/>
            <HomePageList/>
        </Flex>
       
      


    )
}