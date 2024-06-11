import { useState } from "react";
import axios from "axios";
import { config } from "../config";
import useSession from "./useSession";
import { CreateSellerValues } from "../pages/sellers/CreateSellerPage";

export default function useSaveSeller() {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const { token } = useSession();

    const saveSeller = async (seller: CreateSellerValues) => {
        setLoading(true);
        try {
            await axios.post(`${config.api}/api/v1/sellers`, seller, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setError(null);
        } catch (error) {
            setError("Error al crear el vendedor");
        } finally {
            setLoading(false);
        }
    };

    return {
        saveSeller,
        loading,
        error,
    }

}