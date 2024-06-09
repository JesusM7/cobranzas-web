import { Button, Icon, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { BsCash } from "react-icons/bs";

export default function PaymentMenu() {
    return <Menu>
        <MenuButton
            leftIcon={<Icon as={BsCash} />}
            color='white' variant={'ghost'} as={Button} rightIcon={<ChevronDownIcon boxSize={5} />} >
            Pagos
        </MenuButton>
        <MenuList>
            <MenuItem> Nuevo Pago </MenuItem>
            <MenuItem> Ver Pagos </MenuItem>
        </MenuList>
    </Menu>
}