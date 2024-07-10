import { DebitNote } from "./useDebitNote"
import useQuery from "./useQuery"


export default function useDebitNotes(invoiceId?: string) {

    const { data, error, loading } = useQuery<DebitNote[]>({
        endpoint: '/api/v1/debit-note/by-invoice/' + invoiceId,
        defaultValue: [],
        omit: !invoiceId
    })

    return {
        debitNotes: data,
        error,
        loading
    }

}
