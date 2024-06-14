import { Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import moment from "moment";

export default function ExchangeRateList() {

    return <Table variant={'striped'}>
        <Thead>
            <Tr>
                <Th>Divisa</Th>
                <Th>Tasa</Th>
                <Th>Fecha</Th>
            </Tr>
        </Thead>
        <Tbody>
            <Tr>
                <Td>USD</Td>
                <Td>36.4856</Td>
                <Td> {moment().locale('es').format('ddd DD MMM YYYY')} </Td>
            </Tr>
            <Tr>
                <Td>USD</Td>
                <Td>36.4856</Td>
                <Td> {moment().locale('es').format('ddd DD MMM YYYY')} </Td>
            </Tr>
            <Tr>
                <Td>USD</Td>
                <Td>36.4856</Td>
                <Td> {moment().locale('es').format('ddd DD MMM YYYY')} </Td>
            </Tr>
        </Tbody>
    </Table>
}