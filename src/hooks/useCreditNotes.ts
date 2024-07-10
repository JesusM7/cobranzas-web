import { CreditNote } from "./useCreditNote"
import useQuery from "./useQuery"


export default function useCreditNotes(invoiceId?: string) {

    const { data, error, loading } = useQuery<CreditNote[]>({
        endpoint: '/api/v1/credit-note/by-invoice/' + invoiceId,
        defaultValue: [],
        omit: !invoiceId
    })

    return {
        creditNotes: data,
        error,
        loading
    }

}
