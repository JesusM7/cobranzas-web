import { useState } from "react";
import axios from "axios";
import { config } from "../config";
import useSession from "./useSession";
import { CreateCharge } from "../pages/documents/invoices/ChargesPage/partials/CreateCharge";

export default function useSaveCharges() {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const { token } = useSession();

    const saveCharges = async (charges: CreateCharge) => {
        setLoading(true);
        try {
            await axios.post(`${config.api}/api/v1/charges`, charges, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setError(null);
        } catch (error) {
            setError("Error al guardar el abono");
        } finally {
            setLoading(false);
        }
    };

    return {
        saveCharges,
        loading,
        error,
    }

}