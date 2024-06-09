import axios from "axios";
import { useEffect, useState } from "react";
import { config } from "../config";

export default function useMunicipalities({ stateId }: { stateId?: string }) {
    const [municipalities, setMunicipalities] = useState<Municipality[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const fetchMuniciapalities = async (stateId?: string) => {
        try {
            if (!stateId) return;
            setLoading(true);
            const { data } = await axios.get<Municipality[]>(`${config.api}/api/v1/states/${stateId}/municipalities`)
            setMunicipalities(data);
        } catch (error) {
            setError("Error al cargar los estados");
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchMuniciapalities(stateId);
    }, [stateId]);

    return {
        municipalities,
        loading,
        error
    }

}

export type Municipality = {
    id: string;
    name: string;
    stateId: string;
}