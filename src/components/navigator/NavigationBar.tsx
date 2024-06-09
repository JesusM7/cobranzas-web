import { Box, Button, ButtonGroup, Divider, Flex, HStack, Icon, Stack, Tag, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import PaymentMenu from "./PaymentMenu";
import { MdAccountBalanceWallet, MdHome } from "react-icons/md";
import { FaUserCheck } from "react-icons/fa";
import { FaUsersRectangle } from "react-icons/fa6";
import { GiPowderBag } from "react-icons/gi";
import { IoSettingsSharp } from "react-icons/io5";
import moment from "moment";

export default function NavigationBar() {

    return <HStack bg={'primary.800'} spacing={'5px'}>
        <HStack
            spacing='6'
            paddingY={'15px'}
            paddingX={'10px'}>
            <Link to='/'>
                <Button color='white' variant={'ghost'} leftIcon={<Icon as={MdHome} />}>Inicio</Button>
            </Link>
            <Divider orientation="vertical" />
            <PaymentMenu />
            <Divider orientation="vertical" />
            <Button paddingX={'5px'} leftIcon={<Icon as={MdAccountBalanceWallet} />} color='white' variant={'ghost'}>Cuentas</Button>
            <Divider orientation="vertical" />
            <Link to='/crear-cliente'>
                <Button paddingX={'5px'} leftIcon={<Icon as={FaUsersRectangle} />} color='white' variant={'ghost'}>Clientes</Button>
            </Link>
            <Divider orientation="vertical" />
            <Button paddingX={'5px'} leftIcon={<Icon as={FaUserCheck} />} color='white' variant={'ghost'}>Vendedores</Button>
            <Divider orientation="vertical" />
            <Button paddingX={'5px'} leftIcon={<Icon as={GiPowderBag} />} color='white' variant={'ghost'}>Productos</Button>
            <Divider orientation="vertical" />
            <Button paddingX={'5px'} leftIcon={<Icon as={IoSettingsSharp} />} color='white' variant={'ghost'}>Configuracion</Button>
        </HStack>
        <Box
            w='100%'
            h='100%'
            display={'grid'}
            placeContent={'center'}>
            <Stack textAlign={'center'}>
                <Text color={'white'} fontWeight={'light'}>
                    {moment().locale('es').format('ddd DD MMM YYYY')}
                </Text>
                <Flex alignItems={'center'} gap='1ch'>
                    <Tag colorScheme='green' variant='solid' size='md'>$ BCV 36,5411</Tag>
                </Flex>
            </Stack>
        </Box>
    </HStack>
}