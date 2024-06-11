import { Button, Icon, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { BsCash } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function PaymentMenu() {
    return <Menu>
        <MenuButton
            leftIcon={<Icon as={BsCash} />}
            color='white' variant={'navigation_ghost'} as={Button} rightIcon={<ChevronDownIcon boxSize={5} />} >
            Pagos
        </MenuButton>
        <MenuList>
            <MenuItem> Nuevo Pago </MenuItem>
            <MenuItem to={"/pagos"} as={Link}> Ver Pagos </MenuItem> {/* testeo */}
        </MenuList>
    </Menu>
}