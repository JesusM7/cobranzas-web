import { Avatar, Button, HStack, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import useSession from "../hooks/useSession";
import { ChevronDownIcon } from "@chakra-ui/icons";
import LogoutButton from "./LogoutButton";

export default function UserMenu() {
    const { user } = useSession()

    return <HStack spacing={2}>
        <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon boxSize={4}/>} > 
                {user?.name}
            </MenuButton>
            <MenuList>
                <MenuItem> <LogoutButton/> </MenuItem>
            </MenuList>
        </Menu>
        <Avatar size='md' name={user?.name} />
    </HStack>
}