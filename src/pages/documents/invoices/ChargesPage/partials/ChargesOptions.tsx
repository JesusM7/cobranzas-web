import { Card, Flex } from "@chakra-ui/react";
import ChargesList from "./ChargesList";
import CreateCharges from "./CreateCharge";
import { useParams } from "react-router-dom";
import useInvoice from "../../../../../hooks/useInvoice";
import CreateCreditNotePage from "../../../credit-notes/partials/CreateCreditNotePage";
import CreditNotelist from "../../../credit-notes/partials/CreditNoteList";

export default function ChargesOptions() {

    const { invoiceNumber } = useParams<{ invoiceNumber: string }>()
    const { invoice } = useInvoice({ invoiceNumber })

    if (!invoice) {
        return <span>Cargando...</span>
    }
     return <Flex>
        <Card w='33.33%' >
            <ChargesList invoice={invoice} />
        </Card>
        <Card w='33.33%'>
            <CreditNotelist invoice={invoice} />
        </Card>
        <Card w='33.33%'>
            <CreateCreditNotePage invoice={invoice}/>
        </Card>
    </Flex>
}