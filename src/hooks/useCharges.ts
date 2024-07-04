import useQuery from "./useQuery"

export default function useCharges(invoiceId: string | undefined) {

    const { data, error, loading } = useQuery<Charges[]>({
        endpoint:`/api/v1/charges/${invoiceId}`, 
        defaultValue: [],
        omit: !invoiceId
    })

    return {
        charges: data,
        error,
        loading
    }

}

export type Charges = {
    id: string;
    amount: number;
    amountBs: number;
    date: string;
    exchangeRate: number;
    ref: string;
    bank: Bank;
    status: ChargeStatus;
    invoiceId: string;
    observation?: string;
}

export enum Bank {
    BANESCO = "BANESCO",
    MERCANTIL = "MERCANTIL",
    BANPLUS = "BANPLUS",
    BCO_EXTERIOR = "BCO. EXTERIOR"
}

export enum ChargeStatus {
    PENDING = 'PENDING',
    PAID = 'PAID',
}
