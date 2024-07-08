import { Table, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react";
import { Invoice } from "../../../../../hooks/useInvoices";
import moment from "moment";
import useCharges from "../../../../../hooks/useCharges";
import CreateChargesModal from "./CreateChargesModal";

export default function ChargesList({ invoice }: { invoice: Invoice }) {
    const { charges } = useCharges(invoice.id)
    return <Table size={'sm'} variant={'striped'}>
        <Thead>
            <Th colSpan={3}>
                <Text color='secondary.500' fontSize={'md'}>Listado de Abonos</Text>
            </Th>
            <Th>
                <CreateChargesModal invoice={invoice} />
            </Th>
        </Thead>
        <Thead>
            <Tr>
                <Th>Fecha</Th>
                <Th>Abono USD</Th>
                <Th>Banco</Th>
                <Th>Ref</Th>
            </Tr>
        </Thead>
        <Tbody>
            {charges.map(charge => (
                <Tr key={charge.id}>
                    <Td>{moment(charge.date).format('DD-MM-YYYY')}</Td>
                    <Td>{charge.amount} USD</Td>
                    <Td>{charge.bank}</Td>
                    <Td>{charge.ref}</Td>
                </Tr>
            ))}

        </Tbody>
    </Table>
}