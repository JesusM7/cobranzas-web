import { Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";


export default function InvoiceList() {

    // const { invoice } = useInvoice()

    return <Table variant={'striped'}>
        <Thead>
            <Tr>
                <Th>Número</Th>
                <Th>Cliente</Th>
                <Th>Monto USD</Th>
                <Th>Abono USD</Th>
                <Th>Fecha de Emisión</Th>
                <Th>Fecha de Vencimiento</Th>
                <Th>Vendedor</Th>
                <Th>Observación</Th>
            </Tr>
        </Thead>
        <Tbody>
                <Tr>
                    <Td>003645</Td>
                    <Td>Jesus, C.A.</Td>
                    <Td>7.200</Td>
                    <Td>3.000</Td>
                    <Td>30/05/2024</Td>
                    <Td>04/06/2024</Td>
                    <Td>Oficina</Td>
                    <Td>Orden de compra 001717</Td>
                </Tr>
                <Tr>
                    <Td>003645</Td>
                    <Td>Jesus, C.A.</Td>
                    <Td>7.200</Td>
                    <Td>3.000</Td>
                    <Td>30/05/2024</Td>
                    <Td>04/06/2024</Td>
                    <Td>Oficina</Td>
                    <Td></Td>
                </Tr>
        </Tbody>
    </Table>
}