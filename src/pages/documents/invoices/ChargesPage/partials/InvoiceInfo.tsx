import moment from "moment";
import { Invoice } from "../../../../../hooks/useInvoices";
import { Table, Tag, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react";
import InvoicePendingAmount from "../../../../../components/InvoicePendingAmount";

export default function InvoiceInfo({ invoice }: { invoice: Invoice }) {
    return (
        <Table size={'sm'} variant={'striped'}>
            <Thead>
                <Th colSpan={5}>
                    <Text color='secondary.500' fontSize={'md'}>Información de la factura</Text>
                </Th>
            </Thead>
            <Thead>
                <Tr>
                    <Th w='10%' fontWeight={'bold'}>Numero</Th>
                    <Th w='50%' fontWeight={'bold'}>Cliente</Th>
                    <Th fontWeight={'bold'}>F. Emisión</Th>
                    <Th fontWeight={'bold'}>Monto</Th>
                    <Th fontWeight={'bold'}>Monto pendiente</Th>
                </Tr>
            </Thead>
            <Tbody>
                <Tr>
                    <Td>{invoice.number}</Td>
                    <Td>{invoice.client.name}</Td>
                    <Td>{moment(invoice.date).format('DD-MM-YYYY')}</Td>
                    <Td>
                        <Tag colorScheme='teal'>{invoice.total} USD</Tag>
                    </Td>
                    <Td>
                        <InvoicePendingAmount amount={invoice.total} charged={invoice.charged} />
                    </Td>
                </Tr>
            </Tbody>
        </Table>
    )
}