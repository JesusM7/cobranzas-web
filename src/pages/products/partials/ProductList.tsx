import { Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import useProducts from "../../../hooks/useProducts";

export default function ProductList() {

    const { products } = useProducts()

    return <Table variant={'striped'}>
        <Thead>
            <Tr>
                <Th>SKU</Th>
                <Th>Nombre</Th>
                <Th>Precio</Th>
                <Th>Peso Kg</Th>
            </Tr>
        </Thead>
        <Tbody>
            {products.map((product) => (
                <Tr key={product.id}>
                    <Td>{product.sku}</Td>
                    <Td>{product.name}</Td>
                    <Td>{product.price}</Td>
                    <Td>{product.weightKg}</Td>
                </Tr>
            ))}
        </Tbody>
    </Table>
}