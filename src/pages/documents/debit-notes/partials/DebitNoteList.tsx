import { Table, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import { Invoice } from "../../../../hooks/useInvoices";
import useDebitNote from "../../../../hooks/useDebitNote";
import CreateDebitNoteModal from "./CreateDebitNoteModal";


export default function DebitNotelist({ invoice }: { invoice: Invoice }) {

    const { debitNote, loading } = useDebitNote()
    const navigate = useNavigate()

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
                <Th>Fecha de Emisión</Th>
                <Th>Observación</Th>
            </Tr>
        </Thead>
        <Tbody>
            {debitNote.map(debitNote => (
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