import { Client } from "./useClients";
import useQuery from "./useQuery"
import { Seller } from "./useSeller";

export default function useInvoices() {

    const { data, error, loading } = useQuery<Invoice[]>({
        endpoint: '/api/v1/invoices',
        defaultValue: []
    })

    return {
        invoices: data,
        error,
        loading
    }

}

export type Document = {
    id: string;
    documentType: any;
    number: number;
    date: string;
    expirationDate: string;
    client: Client;
    seller: Seller;
    amountUsd: number;
    amountBs: number;
    status: DocumentStatus;
    correlation?: string;
    observation?: string;
}

export type Invoice = Document & {
    paymentCondition: string;
    creditDays: number;
    charges: any[];
    charged: number;
}

export enum DocumentStatus {
    PAID = "PAID",
    PENDING = "PENDING",
    CANCELED = "CANCELED",
}

export enum DocumentTypes {
    INVOICE = '1',
    CREDIT_NOTE = '2',
    DEBIT_NOTE = '3',
}