import { Table, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react";
import moment from "moment";
import { Invoice } from "../../../../hooks/useInvoices";
import CreateDebitNoteModal from "./CreateDebitNoteModal";
import useDebitNotes from "../../../../hooks/useDebitNotes";

export default function DebitNotelist({ invoice }: { invoice: Invoice }) {

    const { debitNotes, loading } = useDebitNotes(invoice.id)

    if (loading) {
        return <div>Cargando...</div>
    }

    return <Table variant={'striped'} size={"sm"}>
        <Thead>
            <Th colSpan={3}>
                <Text color='secondary.500' fontSize={'md'}>Notas de débito</Text>
            </Th>
            <Th>
                <CreateDebitNoteModal invoice={invoice} />
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
            {debitNotes.map(debitNote => (
                <Tr key={debitNote.id}>
                    <Td>{debitNote.number}</Td>
                    <Td>{debitNote.amountUsd}</Td>
                    <Td>{moment(debitNote.date).format('DD-MM-YYYY')}</Td>
                    <Td>{debitNote.observation}</Td>
                </Tr>
            ))}
        </Tbody>
    </Table>
}