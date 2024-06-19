import { Select } from "@chakra-ui/react";
import { ChangeEventHandler } from "react";
import useClients from "../hooks/useClients";

export default function ClientSelect({ onChange, value, name }: SelectProps) {
    const { clients } = useClients();

    return <Select name={name} onChange={onChange} value={value}>
        {clients.map((client) => <option key={client.id} value={client.id}>
            {client.name}
        </option>)}
    </Select>
}

export type SelectProps = {
    onChange?: ChangeEventHandler<HTMLSelectElement>,
    value?: string,
    name?: string
}