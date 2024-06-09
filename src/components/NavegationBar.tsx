import { Button, ButtonGroup } from "@chakra-ui/react";

export default function NavegationBar() {

 return <ButtonGroup variant='outline' spacing='6' size={"lg"} paddingLeft={9}>
<Button variant={"link"}>Pagos</Button>
<Button variant={"link"}>Cuentas</Button>
<Button variant={"link"}>Clientes</Button>
<Button variant={"link"}>Vendedores</Button>
<Button variant={"link"}>Productos</Button>
<Button variant={"link"}>Configuracion</Button>
</ButtonGroup>

}