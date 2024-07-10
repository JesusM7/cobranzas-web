import { Card, Flex, Stat, StatHelpText, StatLabel, StatNumber } from "@chakra-ui/react";
import { DashboardInfo } from "../../../hooks/useDashboardInfo";
import moment from "moment";

export default function ExtraInfoHomePage({ dashboard }: { dashboard: DashboardInfo }) {

    return <Flex flexDir={'column'} gap='10px' padding={'10px'} >

        <Card boxShadow={'0px 1px 10px lightgray'}>
            <Stat padding={'15px'}>
                <StatLabel fontWeight={600} >Monto mas alto por cobrar</StatLabel>
                <StatNumber color={"green"}>{(dashboard.higherPendingInvoice?.amountUsd || 0) - (dashboard.higherPendingInvoice?.charged || 0)} USD</StatNumber>
                <StatHelpText>{dashboard.higherPendingInvoice?.client.name} - Factura {dashboard.higherPendingInvoice?.number}</StatHelpText>
            </Stat>
        </Card>
        <Card boxShadow={'0px 1px 10px lightgray'}>
            <Stat padding={'15px'}  >
                <StatLabel fontWeight={600} >Factura con mas dias vencidos</StatLabel>
                <StatNumber color={"brown"}>{moment().diff(moment(dashboard.olderExpiredInvoice?.expirationDate), 'days')} dias</StatNumber>
                <StatHelpText>{dashboard.olderExpiredInvoice?.client.name} - Factura {dashboard.olderExpiredInvoice?.number}</StatHelpText>
            </Stat>
        </Card>
        <Card boxShadow={'0px 1px 10px lightgray'}>
            <Stat padding={'15px'} >
                <StatLabel fontWeight={600} >Total facturas por cobrar</StatLabel>
                <StatNumber color={"brown"} >{dashboard.totalPendingInvoices.totalInvoices}</StatNumber>
                <StatHelpText>en {dashboard.totalPendingInvoices.totalClients} clientes</StatHelpText>
            </Stat>
        </Card>
        {/*  <Card >
            <Stat padding={'15px'} >
                <StatLabel fontWeight={600} >Total facturas por vencer</StatLabel>
                <StatNumber color={"green"} >3</StatNumber>
                <StatHelpText>en 2 clientes</StatHelpText>
            </Stat>
        </Card> */}
    </Flex>
} 