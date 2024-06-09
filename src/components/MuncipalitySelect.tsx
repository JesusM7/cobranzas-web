import { Select } from "@chakra-ui/react";
import useMunicipalities, { Municipality } from "../hooks/useMunicipalities";
import { SelectProps } from "./StateSelect";

export default function MunicipalitySelect({ stateId, name, onChange, value }: SelectProps & { stateId: string }) {

    const { municipalities } = useMunicipalities({ stateId });

    if (!stateId) return <Select placeholder='Seleccione un estado' disabled />

    return <Select value={value} onChange={onChange} name={name}>
        {municipalities.map((muncipality: Municipality) => <option
            key={muncipality.id}
            value={muncipality.id}>
            {muncipality.name}
        </option>)}
    </Select>
}
