import { Card, Flex } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import useInvoice from "../../../../hooks/useInvoice";
import InvoiceInfo from "./partials/InvoiceInfo";
import ChargesOptions from "./partials/ChargesOptions";

export default function ChargesPage() {

    const { invoiceNumber } = useParams<{ invoiceNumber: string }>()
    const { invoice, refetch } = useInvoice({ invoiceNumber })

    if (!invoice) {
        return <span>Cargando...</span>
    }

    return (
        <Flex flexDir={'column'} gap='10px' padding={'10px'}>
            <Card paddingBottom={"20px"}>
                <InvoiceInfo invoice={invoice} />
            </Card>
           <Card>
            <ChargesOptions/>
           </Card>
        </Flex>
    )
}