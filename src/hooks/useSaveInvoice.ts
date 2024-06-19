import { useState } from "react";
import axios from "axios";
import { config } from "../config";
import useSession from "./useSession";
import { CreateInvoiceValues } from "../pages/documents/invoices/partials/CreateInvoicePage";

export default function useSaveInvoice() {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const { token } = useSession();

    const saveInvoice = async (client: CreateInvoiceValues) => {
        setLoading(true);
        try {
            await axios.post(`${config.api}/undefined`, client, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setError(null);
        } catch (error) {
            setError("Error al guardar la factura");
        } finally {
            setLoading(false);
        }
    };

    return {
        saveInvoice,
        loading,
        error,
    }

}