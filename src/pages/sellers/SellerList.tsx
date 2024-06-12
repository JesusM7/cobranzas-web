import { Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import useSeller from "../../hooks/useSeller";


export default function SellerList() {

    const { clients } = useSeller()

    return <Table variant={'striped'}>
        <Thead>
            <Tr>
                <Th>Nombre</Th>
                <Th>Cedula</Th>
                <Th>Correo</Th>
                <Th>Telefono</Th>
            </Tr>
        </Thead>
        <Tbody>
            {clients.map((client) => (
                <Tr key={client.id}>
                    <Td>{client.name}</Td>
                    <Td>{client.documentId}</Td>
                    <Td>{client.email}</Td>
                    <Td>{client.phoneNumber}</Td>
                </Tr>
            ))}
        </Tbody>
    </Table>
}