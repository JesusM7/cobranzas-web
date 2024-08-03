import { Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import useSeller from "../../hooks/useSeller";


export default function SellerList() {

    const { seller: seller } = useSeller()

    return <Table variant={'striped'} size={'sm'}>
        <Thead>
            <Tr>
                <Th>Nombre</Th>
                <Th>Cedula</Th>
                <Th>Correo</Th>
                <Th>Telefono</Th>
            </Tr>
        </Thead>
        <Tbody>
            {seller.map((seller) => (
                <Tr key={seller.id}>
                    <Td>{seller.name}</Td>
                    <Td>{seller.documentId}</Td>
                    <Td>{seller.email}</Td>
                    <Td>{seller.phoneNumber}</Td>
                </Tr>
            ))}
        </Tbody>
    </Table>
}