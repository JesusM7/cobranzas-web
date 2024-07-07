import { Card, Flex } from "@chakra-ui/react";
import ExtraInfoHomePage from "./ExtraInfoHomePage";
import InvoiceList from "../../documents/invoices/partials/InvoiceList";


export default function HomePageList() {

    return <Flex flexDir={'row'} gap='10px' padding={'5px'}> 

    <Card  w={"20%"}>
        <ExtraInfoHomePage/>
    </Card>

     <Card w={"80%"}>
    <InvoiceList/>
     </Card>
 </Flex>
}