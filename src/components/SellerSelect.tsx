import { Select } from "@chakra-ui/react";
import { ChangeEventHandler } from "react";
import useSeller from "../hooks/useSeller";

export default function SellerSelect({ onChange, value, name }: SelectProps) {
    const { seller: sellers } = useSeller();

    return <Select placeholder="Seleccione" name={name} onChange={onChange} value={value}>
        {sellers.map((seller) => <option key={seller.id} value={seller.id}>
            {seller.name} - {seller.documentId}
        </option>)}
    </Select>
}

export type SelectProps = {
    onChange?: ChangeEventHandler<HTMLSelectElement>,
    value?: string,
    name?: string
}