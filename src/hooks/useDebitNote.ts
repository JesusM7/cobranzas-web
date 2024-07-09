import useQuery from "./useQuery"


export default function useDebitNote() {

    const { data, error, loading } = useQuery<DebitNote[]>({
        endpoint: '/api/v1/debit-note',
        defaultValue: []
    })

    return {
        debitNote: data,
        error,
        loading
    }

}

export type DebitNote = {
    id: string,
    invoiceId: string,
    number: number;
    date: string;
    amountUsd: number;
    amountBs: number;
    observation: string;
    exchangeRate: number;
}
