import { Box, Button, Divider, Flex, HStack, Icon, Stack, Tag, Text } from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";
import PaymentMenu from "./PaymentMenu";
import { MdHome } from "react-icons/md";
import { FaUserCheck } from "react-icons/fa";
import { FaUsersRectangle } from "react-icons/fa6";
import { GiPowderBag } from "react-icons/gi";
import { IoSettingsSharp } from "react-icons/io5";
import TodayExchangeRate from "./TodayExchangeRate";
import DocumentsMenu from "./DocumentsMenu";
import { BsCash } from "react-icons/bs";

export default function NavigationBar() {

    const { pathname } = useLocation();

    return <HStack bg={'primary.800'} spacing={'5px'}>
        <HStack
            spacing='6'
            paddingY={'15px'}
            paddingX={'10px'}>
            <Link to='/'>
                <Button color='white' variant={'navigation_ghost'} leftIcon={<Icon as={MdHome} />}>Inicio</Button>
            </Link>
            <Divider orientation="vertical" />
            {/* <Link to='/pagos'>
                <Button
                    colorScheme="secondary"
                    variant={pathname === '/pagos' ? 'navigation' : 'navigation_ghost'}
                    paddingX={'5px'} leftIcon={<Icon as={BsCash} />}>Pagos</Button>
            </Link> */}
            {/* <Divider orientation="vertical" /> */}
            {/* <Button paddingX={'5px'} leftIcon={<Icon as={MdAccountBalanceWallet} />} color='white' variant={'navigation_ghost'}>Documentos</Button> */}
            <DocumentsMenu />
            <Divider orientation="vertical" />
            <Link to='/clientes'>
                <Button
                    colorScheme="secondary"
                    variant={pathname === '/clientes' ? 'navigation' : 'navigation_ghost'}
                    paddingX={'5px'} leftIcon={<Icon as={FaUsersRectangle} />}>Clientes</Button>
            </Link>
            <Divider orientation="vertical" />
            <Link to={"/vendedores"}>
                <Button paddingX={'5px'} leftIcon={<Icon as={FaUserCheck} />}
                    color='white'
                    variant={pathname === '/crear-vendedor' ? 'navigation' : 'navigation_ghost'}
                >Vendedores</Button>
            </Link>
            <Divider orientation="vertical" />
            <Link to="/productos">
                <Button
                    paddingX={'5px'} leftIcon={<Icon as={GiPowderBag} />}
                    color='white'
                    variant={pathname === '/crear-producto' ? 'navigation' : 'navigation_ghost'}
                >Productos</Button>
            </Link>
            <Divider orientation="vertical" />
            <Button paddingX={'5px'} leftIcon={<Icon as={IoSettingsSharp} />} color='white' variant={'navigation_ghost'}>Configuracion</Button>
        </HStack>
       <TodayExchangeRate />
    </HStack>
}