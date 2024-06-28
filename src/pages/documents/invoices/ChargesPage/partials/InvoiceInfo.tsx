import moment from "moment";
import { Invoice } from "../../../../../hooks/useInvoices";
import { Table, Tag, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react";
import InvoicePendingAmount from "../../../../../components/InvoicePendingAmount";

export default function InvoiceInfo({ invoice }: { invoice: Invoice }) {
    return (
        <Table size={'md'} variant={'striped'}>
            <Thead>
                <Th>
                    <Text color='secondary.500' fontSize={'md'}>Información de la factura</Text>
                </Th>
            </Thead>
            <Tbody>
                <Tr>
                    <Td fontWeight={'bold'}>Numero</Td>
                    <Td>{invoice.number}</Td>
                </Tr>
                <Tr>
                    <Td fontWeight={'bold'}>F. Emisión</Td>
                    <Td>{moment(invoice.date).format('DD-MM-YYYY')}</Td>
                </Tr>
                <Tr>
                    <Td fontWeight={'bold'}>Monto</Td>
                    <Td>
                        <Tag colorScheme='teal'>{invoice.amountUsd} USD</Tag>
                    </Td>
                </Tr>
                <Tr>
                    <Td fontWeight={'bold'}>Monto pendiente</Td>
                    <Td>
                        <InvoicePendingAmount amount={invoice.amountUsd} charged={invoice.charged} />
                    </Td>
                </Tr>
            </Tbody>
        </Table>
    )
}