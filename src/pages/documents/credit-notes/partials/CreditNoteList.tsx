import { Table, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react";
import moment from "moment";
import CreateCreditNoteModal from "./CreateCreditNoteModal";
import { Invoice } from "../../../../hooks/useInvoices";
import useCreditNotes from "../../../../hooks/useCreditNotes";


export default function CreditNotelist({ invoice }: { invoice: Invoice }) {

    const { creditNotes, loading } = useCreditNotes(invoice.id)

    if (loading) {
        return <div>Cargando...</div>
    }

    return <Table variant={'striped'} size={"sm"}>
        <Thead>
            <Th colSpan={3}>
                <Text color='secondary.500' fontSize={'md'}>Notas de crédito</Text>
            </Th>
            <Th>
                <CreateCreditNoteModal invoice={invoice} />
            </Th>
        </Thead>
        <Thead>
            <Tr>
                <Th>Número</Th>
                <Th>Monto USD</Th>
                <Th>F. Emisión</Th>
                <Th>Observación</Th>
            </Tr>
        </Thead>
        <Tbody>
            {creditNotes.map(creditNote => (
                <Tr key={creditNote.id}>
                    <Td>{creditNote.number}</Td>
                    <Td>{creditNote.amountUsd}</Td>
                    <Td>{moment(creditNote.date).format('DD-MM-YYYY')}</Td>
                    <Td>{creditNote.observation}</Td>
                </Tr>
            ))}
        </Tbody>
    </Table>
}