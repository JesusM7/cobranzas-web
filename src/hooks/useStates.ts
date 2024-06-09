import axios from "axios";
import { useEffect, useState } from "react";
import { config } from "../config";

export default function useStates() {
    const [states, setStates] = useState<State[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const fetchStates = async () => {
        try {
            setLoading(true);
            const { data } = await axios.get<State[]>(`${config.api}/api/v1/states`)
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