import { Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import useClients from "../../../hooks/useClients";

export default function ClientList() {

    const { clients } = useClients()

    return <Table variant={'striped'}>
        <Thead>
            <Tr>
                <Th>RIF</Th>
                <Th>Nombre</Th>
                <Th>Estado</Th>
                <Th>Municipio</Th>
                <Th>Dirección</Th>
                <Th>Correo</Th>
                <Th>Telefono</Th>
            </Tr>
        </Thead>
        <Tbody>
            {clients.map((client) => (
                <Tr key={client.id}>
                    <Td>{client.rif}</Td>
                    <Td>{client.name}</Td>
                    <Td>{client.municipality?.state?.name}</Td>
                    <Td>{client.municipality?.name}</Td>
                    <Td>{client.address}</Td>
                    <Td>{client.email}</Td>
                    <Td>{client.phoneNumber}</Td>
                </Tr>
            ))}
        </Tbody>
    </Table>
}