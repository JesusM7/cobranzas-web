import { useState } from "react";
import { CreateClientValues } from "../pages/clients/CreateClientPage";
import axios from "axios";
import { config } from "../config";
import useSession from "./useSession";

export default function useSaveClient() {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const { token } = useSession();

    const saveClient = async (client: CreateClientValues) => {
        setLoading(true);
        try {
            await axios.post(`${config.api}/api/v1/clients`, client, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setError(null);
        } catch (error) {
            setError("Error al guardar el cliente");
        } finally {
            setLoading(false);
        }
    };

    return {
        saveClient,
        loading,
        error,
    }

}