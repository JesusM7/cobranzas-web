import { Flex } from "@chakra-ui/react";
import HomePageCards from "./partials/HomePageCards";
import HomePageList from "./partials/HomePageList";
import useDashboardInfo from "../../hooks/useDashboardInfo";

export default function HomePage() {
    const { dashboard } = useDashboardInfo()
    return (
        <Flex flexDir={'column'} gap='10px' padding={'10px'}>
            <HomePageCards dashboard={dashboard} />
            <HomePageList dashboard={dashboard} />
        </Flex>




    )
}