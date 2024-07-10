import { Card, Flex } from "@chakra-ui/react";
import ExtraInfoHomePage from "./ExtraInfoHomePage";
import InvoiceList from "../../documents/invoices/partials/InvoiceList";
import { DashboardInfo } from "../../../hooks/useDashboardInfo";


export default function HomePageList({ dashboard }: { dashboard: DashboardInfo }) {

    return <Flex flexDir={'row'} gap='10px' padding={'5px'}>

        <ExtraInfoHomePage dashboard={dashboard} />

        <Card boxShadow={'lg'}>
            <InvoiceList />
        </Card>
    </Flex>
}