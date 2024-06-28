import { Invoice } from "./useInvoices";
import useQuery from "./useQuery"

export default function useInvoice({ invoiceNumber }: { invoiceNumber?: string }) {

    const { data, error, loading } = useQuery<Invoice | undefined>({
        endpoint: `/api/v1/invoices/${invoiceNumber}`,
        defaultValue: undefined,
        omit: !invoiceNumber
    })

    return {
        invoice: data,
        error,
        loading
    }

}