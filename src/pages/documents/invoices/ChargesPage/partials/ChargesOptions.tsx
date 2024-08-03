import { Card, Flex } from "@chakra-ui/react";
import ChargesList from "./ChargesList";
import { useParams } from "react-router-dom";
import useInvoice from "../../../../../hooks/useInvoice";
import CreditNotelist from "../../../credit-notes/partials/CreditNoteList";
import DebitNotelist from "../../../debit-notes/partials/DebitNoteList";

export default function ChargesOptions() {

    const { invoiceNumber } = useParams<{ invoiceNumber: string }>()
    const { invoice } = useInvoice({ invoiceNumber })

    if (!invoice) {
        return <span>Cargando...</span>
    }
    return <Flex flexDirection={{ base: 'column', lg: 'row' }} gap={'2ch'}>
        <Card w={{ base: '100%', lg: '33.33%' }}>
            <ChargesList invoice={invoice} />
        </Card>
        <Card w={{ base: '100%', lg: '33.33%' }}>
            <CreditNotelist invoice={invoice} />
        </Card>
        <Card w={{ base: '100%', lg: '33.33%' }}>
            <DebitNotelist invoice={invoice} />
        </Card>
    </Flex>
}