import { Card, Flex } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import useInvoice from "../../../../hooks/useInvoice";
import InvoiceInfo from "./partials/InvoiceInfo";

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
                Listado de abonos
            </Card>
            <Card w='33.33%'>
                Agregar abono
            </Card>
        </Flex>
    )
}