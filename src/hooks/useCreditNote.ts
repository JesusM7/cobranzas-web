import useQuery from "./useQuery"


export default function useCreditNote() {

    const { data, error, loading } = useQuery<CreditNote[]>({
        endpoint: '/api/v1/credit-note',
        defaultValue: []
    })

    return {
        creditNote: data,
        error,
        loading
    }

}

export type CreditNote = {
    id: string,
    invoiceId: string,
    number: number;
    date: string;
    amountUsd: number;
    amountBs: number;
    observation: string;
    exchangeRate: number;
}
