import { Select } from "@chakra-ui/react";
import { ChangeEventHandler } from "react";
import useInvoices from "../hooks/useInvoices";

export default function InvoiceSelect({ onChange, value, name }: SelectProps) {
    const { invoices } = useInvoices()

    return <Select placeholder="Seleccione" name={name} onChange={onChange} value={value}>
        {invoices.map((invoice) => <option key={invoice.id} value={invoice.id}>
            {invoice.number}
        </option>)}
    </Select>
}

export type SelectProps = {
    onChange?: ChangeEventHandler<HTMLSelectElement>,
    value?: string,
    name?: string
}