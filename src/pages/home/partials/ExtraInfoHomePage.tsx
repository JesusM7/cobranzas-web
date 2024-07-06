import { Card, Flex, Stat, StatHelpText, StatLabel, StatNumber } from "@chakra-ui/react";

export default function ExtraInfoHomePage(){ 

    return <Flex flexDir={'column'} gap='10px' padding={'10px'} >

        <Card >
            <Stat padding={'15px'}>
                <StatLabel  fontWeight={600} >Mayor monto por cobrar</StatLabel>
                <StatNumber color={"green"}>154 USD</StatNumber>
                <StatHelpText>Jesús, C.A. - Factura 3664</StatHelpText>
            </Stat>
        </Card>
        <Card >
            <Stat padding={'15px'}  >
                <StatLabel  fontWeight={600} >Factura con mas dias vencidos</StatLabel>
                <StatNumber color={"brown"}  >45 Dias</StatNumber>
                <StatHelpText>Jesus, C.A. - Factura 3664 </StatHelpText>
            </Stat>
        </Card>
        <Card >
            <Stat padding={'15px'} >
                <StatLabel  fontWeight={600} >Total facturas por cobrar</StatLabel>
                <StatNumber color={"brown"} >25</StatNumber>
                <StatHelpText>en 24 clientes</StatHelpText>
            </Stat>
        </Card>
        <Card >
            <Stat padding={'15px'} >
                <StatLabel fontWeight={600} >Total facturas por vencer</StatLabel>
                <StatNumber color={"green"} >3</StatNumber>
                <StatHelpText>en 2 clientes</StatHelpText>
            </Stat>
        </Card>
    </Flex>
} 