import axios from "axios";
import { useEffect, useState } from "react";
import { config } from "../config";
import useSession from "./useSession";

export default function useSeller() {
    const [seller, setSeller] = useState<Seller[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const { token } = useSession();

    const fetchSeller = async () => {
        try {
            setLoading(true);
            const { data } = await axios.get<[Seller]>(`${config.api}/api/v1/sellers`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            setSeller(data);
        } catch (error) {
            setError("Error al cargar los vendedores");
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchSeller();
    }, []);

    return {
        clients: seller,
        loading,
        error
    }

}

export type Seller = {
    id: string;
    name: string;
    phoneNumber: string;
    email: string;
    documentId: string;
}