import { Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import moment from "moment";
import useExchangeRate from "../../hooks/useExchangeRate";

export default function ExchangeRateList() {
    
    const { exchangeRate } = useExchangeRate()

    return <Table variant={'striped'}>
        <Thead>
            <Tr>
                <Th>Divisa</Th>
                <Th>Tasa</Th>
                <Th>Fecha</Th>
            </Tr>
        </Thead>
        <Tbody>
            {exchangeRate.map((exchangeRate) => (
                <Tr key={exchangeRate.id}>
                    <Td>{exchangeRate.rate}</Td>
                    <Td>{exchangeRate.currency}</Td>
                    <Td>{moment(exchangeRate.date).format("DD-MM-YYYY")}</Td>
                </Tr>
            ))}
        </Tbody>
    </Table>
}