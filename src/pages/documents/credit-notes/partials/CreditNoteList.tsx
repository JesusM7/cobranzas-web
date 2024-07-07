import { Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import UseCreditNote from "../../../../hooks/useCreditNote";
import CreateCreditNoteModal from "./CreateCreditNoteModal";


export default function CreditNotelist() {

    const { creditNote, loading } = UseCreditNote()
    const navigate = useNavigate()

    if (loading) {
        return <div>Cargando...</div>
    }

    return <Table variant={'striped'} size={"sm"}>
        <Thead>
            <Th>
                <CreateCreditNoteModal/>
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
            {creditNote.map(creditNote => (
                <Tr _hover={{
                    color: 'secondary.500',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                }} key={creditNote.id} onClick={() => navigate(`/facturas/${creditNote.number}/abonos`)}>
                    <Td>{creditNote.amountUsd}</Td>
                    <Td>{moment(creditNote.date).format('DD-MM-YYYY')}</Td>
                    <Td>{creditNote.observation}</Td>
                </Tr>
            ))}
        </Tbody>
    </Table>
}