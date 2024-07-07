import { useState } from "react";
import axios from "axios";
import { config } from "../config";
import useSession from "./useSession";
import { CreateCreditNoteValues } from "../pages/documents/credit-notes/partials/CreateCreditNotePage";

export default function useSaveCreditNote() {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const { token } = useSession();

    const saveCreditNote = async (creditNote: CreateCreditNoteValues) => {
        setLoading(true);
        try {
            await axios.post(`${config.api}/api/v1/credit-note`, creditNote, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setError(null);
        } catch (error) {
            setError("Error al guardar la nota de crédito");
        } finally {
            setLoading(false);
        }
    };

    return {
        saveCreditNote,
        loading,
        error,
    }

}