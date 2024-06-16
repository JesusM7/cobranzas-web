import axios from "axios";
import { useEffect, useState } from "react";
import { config } from "../config";
import useSession from "./useSession";

export default function useExchangeRate() {
    const [exchangeRate, setExchangeRate] = useState<ExchangeRate[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const { token } = useSession();

    const fetchExchangeRate = async () => {
        try {
            setLoading(true);
            const { data } = await axios.get<ExchangeRate[]>(`${config.api}/api/v1/exchange-rate/history`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            setExchangeRate(data);
        } catch (error) {
            setError("Error al cargar las tasas de cambio");
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchExchangeRate();
    }, []);

    return {
        exchangeRate,
        loading,
        error
    }

}

export function useLatestExchangeRate() {
    const [exchangeRate, setExchangeRate] = useState<ExchangeRate | undefined>(undefined);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const { token } = useSession();

    const fetchExchangeRate = async () => {
        try {
            setLoading(true);
            const { data } = await axios.get<ExchangeRate>(`${config.api}/api/v1/exchange-rate/latest`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            setExchangeRate(data);
        } catch (error) {
            setError("Error al cargar las tasas de cambio");
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchExchangeRate();
    }, []);

    return {
        exchangeRate,
        loading,
        error
    }
}

export type ExchangeRate = {
    id: string
    rate: number
    currency: string
    date: Date
}