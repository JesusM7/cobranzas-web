import axios from "axios";
import { useEffect, useState } from "react";
import { config } from "../config";
import useSession from "./useSession";
import { Municipality } from "./useMunicipalities";

export default function useClients() {
    const [clients, setClients] = useState<Client[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const { token } = useSession();

    const fetchClients = async () => {
        try {
            setLoading(true);
            const { data } = await axios.get<Client[]>(`${config.api}/api/v1/clients`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            setClients(data);
        } catch (error) {
            setError("Error al cargar los estados");
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchClients();
    }, []);

    return {
        clients,
        loading,
        error
    }

}

export type Client = {
    id: string;
    rif: string;
    name: string;
    phoneNumber: string;
    address: string;
    municipalityId: string;
    email: string | undefined;
    municipality?: Municipality;
}