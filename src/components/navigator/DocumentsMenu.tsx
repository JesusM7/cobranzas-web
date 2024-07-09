import { Button, Icon, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { MdAccountBalanceWallet } from "react-icons/md";

export default function DocumentsMenu() {
    return <Menu>
        <MenuButton
            leftIcon={<Icon as={MdAccountBalanceWallet} />}
            color='white' variant={'navigation_ghost'} as={Button} rightIcon={<ChevronDownIcon boxSize={5} />} >
            Documentos
        </MenuButton>
        <MenuList>
            <MenuItem to={"/facturas"} as={Link}> Facturas </MenuItem>
        </MenuList>
    </Menu>
}