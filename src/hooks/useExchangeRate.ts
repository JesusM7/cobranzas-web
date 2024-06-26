import axios from "axios";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
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

export function useRefreshExchangeRate(updater: Dispatch<SetStateAction<ExchangeRate | undefined>>) {
    const [exchangeRate, setExchangeRate] = useState<ExchangeRate | undefined>(undefined);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const { token } = useSession();

    const fetchExchangeRate = async () => {
        try {
            setLoading(true);
            const { data } = await axios.get<ExchangeRate>(`${config.api}/api/v1/exchange-rate`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            setExchangeRate(data);
            updater(data);
        } catch (error) {
            setError("Error al cargar las tasas de cambio");
        } finally {
            setLoading(false);
        }
    }

    return {
        fetchExchangeRate,
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
        setExchangeRate,
        loading,
        error
    }
}

export type Currency = "USD" | "BS";

export function useCurrencyExchange(amount: number, from: Currency, to: Currency) {
    const { exchangeRate } = useLatestExchangeRate()
    if (!exchangeRate) {
        return 0;
    }

    if (from === "USD" && to === "BS") {
        return amount * exchangeRate.rate;
    }

    if (from === "BS" && to === "USD") {
        return amount / exchangeRate.rate;
    }

    return amount;

}


export type ExchangeRate = {
    id: string
    rate: number
    currency: string
    date: Date
}