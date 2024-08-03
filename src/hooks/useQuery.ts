import axios from "axios";
import { useEffect, useState } from "react";
import { config } from "../config";
import useSession from "./useSession";

type UseQueryProps<T> = {
    endpoint: string;
    onError?: (error: string) => void;
    onSuccess?: (data: T) => void;
    defaultValue: T,
    params?: any;
    omit?: boolean
}

export default function useQuery<T>(props: UseQueryProps<T>) {
    const [data, setData] = useState<T>(props.defaultValue);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const { token } = useSession();

    const fetchData = async () => {
        try {
            setLoading(true);
            const { data } = await axios.get<T>(`${config.api}${props.endpoint}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                params: props.params
            })
            setData(data);
            props.onSuccess?.(data);
        } catch (error) {
            setError("Error al cargar los datos");
            props.onError?.("Error al cargar los datos");
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        if (!props.omit) {
            fetchData();
        }
    }, [props.omit]);

    return {
        data,
        loading,
        error,
        refetch: fetchData
    }
}