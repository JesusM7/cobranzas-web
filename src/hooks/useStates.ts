import axios from "axios";
import { useEffect, useState } from "react";
import { config } from "../config";
import useSession from "./useSession";

export default function useStates() {
    const [states, setStates] = useState<State[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const { token } = useSession();

    const fetchStates = async () => {
        try {
            setLoading(true);
            const { data } = await axios.get<State[]>(`${config.api}/api/v1/states`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            setStates(data);
        } catch (error) {
            setError("Error al cargar los estados");
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchStates();
    }, []);

    return {
        states,
        loading,
        error
    }

}

export type State = {
    id: string;
    name: string;
}