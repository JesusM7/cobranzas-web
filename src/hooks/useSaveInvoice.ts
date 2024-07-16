import { useState } from "react";
import axios from "axios";
import { config } from "../config";
import useSession from "./useSession";
import { CreateInvoiceValues } from "../pages/documents/invoices/partials/CreateInvoicePage";

export default function useSaveInvoice() {
    const [loading, setLoading] = useState<boolean>(false);
    const { token } = useSession();

    const saveInvoice = async (invoice: CreateInvoiceValues, {
        onError,
        onSuccess,
    }: MutationCallbacks = {}) => {
        setLoading(true);
        try {
            await axios.post(`${config.api}/api/v1/invoices`, invoice, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            onSuccess?.();
        } catch (error) {
            onError?.("Error al guardar la factura");
        } finally {
            setLoading(false);
        }
    };

    return {
        saveInvoice,
        loading,
    }

}

export type MutationCallbacks = {
    onError?: (error: string) => void;
    onSuccess?: () => void;
}