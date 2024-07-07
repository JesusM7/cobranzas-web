import { Tag } from "@chakra-ui/react";
import { DocumentStatus } from "../hooks/useInvoices";

export default function InvoiceStatus({ status, size }: { status: DocumentStatus, size?: 'sm' | 'md' | 'lg' }) {

    const mapStatus = (status: DocumentStatus) => {
        switch (status) {
            case DocumentStatus.CANCELED:
                return { text: 'Anulado', color: 'red.500' }
            case DocumentStatus.PAID:
                return { text: 'Pagado', color: 'green.500' }
            case DocumentStatus.PENDING:
                return { text: 'Pediente', color: 'blue.500' }
            default:
                return { text: 'Desconocido', color: 'gray.500' }
        }
    }

    return (
        <Tag size={size || 'md'}
            color={'white'}
            bgColor={mapStatus(status).color}>
            {mapStatus(status).text}
        </Tag>
    )
}