import { Select } from "@chakra-ui/react";
import { SelectProps } from "./StateSelect";
import useCities, { City } from "../hooks/useCities";

export default function CitySelect({ stateId, name, onChange, value }: SelectProps & { stateId: string }) {

    const { cities } = useCities({ stateId });

    if (!stateId) return <Select placeholder='Seleccione un estado' disabled />

    return <Select value={value} onChange={onChange} name={name}>
        {cities.map((city: City) => <option
            key={city.id}
            value={city.id}>
            {city.name}
        </option>)}
    </Select>
}
