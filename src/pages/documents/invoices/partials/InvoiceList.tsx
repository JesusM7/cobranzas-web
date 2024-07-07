import { Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import useInvoices from "../../../../hooks/useInvoices";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import InvoiceStatus from "../../../../components/InvoiceStatus";


export default function InvoiceList() {

    const { invoices, loading } = useInvoices()
    const navigate = useNavigate()

    if (loading) {
        return <div>Cargando...</div>
    }

    return <Table variant={'striped'}>
        <Thead>
            <Tr>
                <Th>Número</Th>
                <Th>Cliente</Th>
                <Th>Monto USD</Th>
                <Th>Abonado USD</Th>
                <Th>Fecha de Emisión</Th>
                <Th>Fecha de Vencimiento</Th>
                <Th>Vendedor</Th>
                <Th>Status</Th>
                <Th>Observación</Th>
            </Tr>
        </Thead>
        <Tbody>
            {invoices.map(invoice => (
                <Tr _hover={{
                    color: 'secondary.500',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                }} key={invoice.id} onClick={() => navigate(`/facturas/${invoice.number}/abonos`)}>
                    <Td>{invoice.number}</Td>
                    <Td>{invoice.client.name}</Td>
                    <Td>USD {invoice.amountUsd}</Td>
                    <Td>USD {invoice.charged}</Td>
                    <Td>{moment(invoice.date).format('DD-MM-YYYY')}</Td>
                    <Td>{moment(invoice.expirationDate).format('DD-MM-YYYY')}</Td>
                    <Td>{invoice.seller.name}</Td>
                    <Td>{<InvoiceStatus status={invoice.status} />}</Td>
                    <Td>{invoice.observation}</Td>
                </Tr>
            ))}
        </Tbody>
    </Table>
}