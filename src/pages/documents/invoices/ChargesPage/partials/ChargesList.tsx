import { Table, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react";
import { Invoice } from "../../../../../hooks/useInvoices";
import moment from "moment";
import useCharges from "../../../../../hooks/useCharges";

export default function ChargesList({ invoice }: { invoice: Invoice }) {
    const {charges} = useCharges(invoice.id)
    return <Table variant={'striped'}>
        <Thead>
            <Th>
                <Text color='secondary.500' fontSize={'md'}>Listado de Abonos</Text>
            </Th>
        </Thead>
        <Thead>
            <Tr>
                <Th>Fecha</Th>
                <Th>Abono</Th>
                <Th>Banco</Th>
                <Th>Ref</Th>
            </Tr>
        </Thead>
        <Tbody>
            <Tr>
                <Td>{moment(invoice.date).format('DD-MM-YYYY')}</Td>
                <Td>{}</Td>
                <Td>{}</Td>
                <Td>{}</Td>
            </Tr>
        </Tbody>
    </Table>
}