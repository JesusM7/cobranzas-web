import { Invoice } from "./useInvoices";
import useQuery from "./useQuery"


export default function useDashboardInfo() {

    const { data, error, loading } = useQuery<DashboardInfo>({
        endpoint: '/api/v1/dashboard',
        defaultValue: {
            monthlyClients: 0,
            totalIncome: 0,
            totalExpiredAmount: 0,
            totalPendingAmount: 0,
            totalPendingInvoices: { totalInvoices: 0, totalClients: 0 },
            higherPendingInvoice: null,
            olderExpiredInvoice: null,
            totalPendingAmountByConsignment: 0,
        }
    })

    return {
        dashboard: data,
        error,
        loading
    }

}

export type DashboardInfo = {
    monthlyClients: number;
    totalIncome: number;
    totalExpiredAmount: number;
    totalPendingAmount: number;
    higherPendingInvoice?: Invoice | null;
    olderExpiredInvoice?: Invoice | null;
    totalPendingInvoices: { totalInvoices: number, totalClients: number };
    totalPendingAmountByConsignment: number
}