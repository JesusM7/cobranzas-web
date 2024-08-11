import { Card, Flex, Stat, StatHelpText, StatLabel, StatNumber } from "@chakra-ui/react";
import { DashboardInfo } from "../../../hooks/useDashboardInfo";
import moment from "moment";

export default function HomePageCards({ dashboard }: { dashboard: DashboardInfo }) {

    const startOfMonth = moment().startOf('month').format('MMM DD')
    const now = moment().format('MMM DD')

    return <Flex flexDir={'row'} gap='10px' padding={'10px'}>
        <Card w='33.33%' bgColor={'blue.100'} color={'blue.800'}>
            <Stat padding={'15px'} >
                <StatLabel fontSize={"md"} fontWeight={600} >Consignación por Cobrar</StatLabel>
                <StatNumber>{dashboard.totalPendingAmountByConsignment} USD</StatNumber>
                <StatHelpText>Monto total por cobrar de Consignación</StatHelpText>
            </Stat>
        </Card>
        <Card w='33.33%' bgColor={'green.100'} color={'green.800'}>
            <Stat padding={'15px'}>
                <StatLabel fontSize={"md"} fontWeight={600} >Ingresos MTD</StatLabel>
                <StatNumber >{dashboard.totalIncome} USD</StatNumber>
                <StatHelpText>{startOfMonth} - {now}</StatHelpText>
            </Stat>
        </Card>
        <Card w='33.33%' bgColor={'yellow.100'} color={'yellow.800'}>
            <Stat padding={'15px'} >
                <StatLabel fontSize={"md"} fontWeight={600} >Vencido por cobrar</StatLabel>
                <StatNumber color={"brown"} >{dashboard.totalExpiredAmount} USD</StatNumber>
                <StatHelpText>Monto total de facturas vencidas por cobrar</StatHelpText>
            </Stat>
        </Card>
        <Card w='33.33%' bgColor={'pink.100'} color={'pink.800'}>
            <Stat padding={'15px'} >
                <StatLabel fontSize={"md"} fontWeight={600} >Total por cobrar</StatLabel>
                <StatNumber color={"pink.800"} >{dashboard.totalPendingAmount} USD</StatNumber>
                <StatHelpText>Monto total por cobrar</StatHelpText>
            </Stat>
        </Card>
    </Flex>
} 