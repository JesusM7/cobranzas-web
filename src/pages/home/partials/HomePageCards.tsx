import { Card, CardBody, Flex, Stat, StatHelpText, StatLabel, StatNumber } from "@chakra-ui/react";

export default function HomePageCards() {

    return <Flex flexDir={'row'} gap='10px' padding={'10px'}>
        <Card w='33.33%' bgColor={'blue.500'} color={'blue.50'}>
            <CardBody>
                <Stat padding={'15px'} >
                    <StatLabel fontSize={"md"} fontWeight={600} >N° de clientes MTD</StatLabel>
                    <StatNumber>154</StatNumber>
                    <StatHelpText>Feb 12 - Feb 28</StatHelpText>
                </Stat>
            </CardBody>
        </Card>
        <Card w='33.33%' bgColor={'green.500'} color={'green.50'}>
            <Stat padding={'15px'}>
                <StatLabel fontSize={"md"} fontWeight={600} >Ingresos MTD</StatLabel>
                <StatNumber >2000.22 USD</StatNumber>
                <StatHelpText>Feb 12 - Feb 28</StatHelpText>
            </Stat>
        </Card>
        <Card w='33.33%'>
            <Stat padding={'15px'} >
                <StatLabel fontSize={"md"} fontWeight={600} >Vencido por cobrar</StatLabel>
                <StatNumber color={"brown"} >2000.22 USD</StatNumber>
                <StatHelpText>Total vencido por cobrar</StatHelpText>
            </Stat>
        </Card>
        <Card w='33.33%'>
            <Stat padding={'15px'} >
                <StatLabel fontSize={"md"} fontWeight={600} >Total por cobrar</StatLabel>
                <StatNumber color={"brown"} >3000.22 USD</StatNumber>
                <StatHelpText></StatHelpText>
            </Stat>
        </Card>
    </Flex>
} 