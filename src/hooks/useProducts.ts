import axios from "axios";
import { useEffect, useState } from "react";
import { config } from "../config";
import useSession from "./useSession";

export default function useProducts() {
    const [products, setClients] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const { token } = useSession();

    const fetchProducts = async () => {
        try {
            setLoading(true);
            const { data } = await axios.get<Product[]>(`${config.api}/api/v1/products`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            setClients(data);
        } catch (error) {
            setError("Error al cargar los productos");
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchProducts();
    }, []);

    return {
        products,
        loading,
        error
    }

}

export type Product = {
    id: string;
    sku: string;
    name: string;
    price: number;
    weightKg: number;
}