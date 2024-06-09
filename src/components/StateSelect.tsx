import { Select } from "@chakra-ui/react";
import useStates from "../hooks/useStates";
import { ChangeEventHandler } from "react";

export default function StateSelect({ onChange, value, name }: SelectProps) {
    const { states } = useStates();

    return <Select name={name} onChange={onChange} value={value}>
        {states.map((state) => <option key={state.id} value={state.id}>
            {state.name}
        </option>)}
    </Select>
}

export type SelectProps = {
    onChange?: ChangeEventHandler<HTMLSelectElement>,
    value?: string,
    name?: string
}