import { Button, ButtonGroup } from "@chakra-ui/react";

export default function NavegationBar() {

 return <ButtonGroup variant='outline' spacing='6' size={"lg"} border={"solid red"} paddingLeft={9}  >
<Button colorScheme='blue'>Pagos</Button>
<Button colorScheme='blue'>Cuentas</Button>
<Button colorScheme='blue'>Clientes</Button>
<Button colorScheme='blue'>Vendedores</Button>
<Button colorScheme='blue'>Productos</Button>
<Button colorScheme='blue'>Configuracion</Button>
</ButtonGroup>

}