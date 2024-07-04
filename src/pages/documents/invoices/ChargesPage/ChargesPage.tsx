import { Card, Flex } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import useInvoice from "../../../../hooks/useInvoice";
import InvoiceInfo from "./partials/InvoiceInfo";
import ChargesList from "./partials/ChargesList";
import CreateCharges from "./partials/CreateCharge";

export default function ChargesPage() {

    const { invoiceNumber } = useParams<{ invoiceNumber: string }>()
    const { invoice } = useInvoice({ invoiceNumber })

    if (!invoice) {
        return <span>Cargando...</span>
    }

    return (
        <Flex flexDir={'row'} gap='10px' padding={'10px'}>
            <Card w='33.33%'>
                <InvoiceInfo invoice={invoice} />
            </Card>
            <Card w='33.33%'>
                <ChargesList invoice={invoice} />
            </Card>
            <Card w='33.33%'>
                <CreateCharges invoiceNumber={invoice.number}/>
            </Card>
        </Flex>
    )
}