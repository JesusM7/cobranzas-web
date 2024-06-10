import { useState } from "react";
import axios from "axios";
import { config } from "../config";
import useSession from "./useSession";
import { CreateProductValues } from "../pages/products/CreateProductPage";

export default function useSaveProduct() {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const { token } = useSession();

    const saveProduct = async (product: CreateProductValues) => {
        setLoading(true);
        try {
            await axios.post(`${config.api}/api/v1/products`, product, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setError(null);
        } catch (error) {
            setError("Error al crear el producto");
        } finally {
            setLoading(false);
        }
    };

    return {
        saveProduct,
        loading,
        error,
    }

}