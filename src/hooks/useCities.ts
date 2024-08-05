import axios from "axios";
import { useEffect, useState } from "react";
import { config } from "../config";
import useSession from "./useSession";
import { State } from "./useStates";

export default function useCities({ stateId }: { stateId?: string }) {
    const [cities, setCities] = useState<City[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const { token } = useSession();

    const fetchCities = async (stateId?: string) => {
        try {
            if (!stateId) return;
            setLoading(true);
            const { data } = await axios.get<City[]>(`${config.api}/api/v1/states/${stateId}/cities`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            setCities(data);
        } catch (error) {
            setError("Error al cargar las ciudades");
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchCities(stateId);
    }, [stateId]);

    return {
        cities,
        loading,
        error
    }

}

export type City = {
    id: string;
    name: string;
    stateId: string;
    state?: State;
}