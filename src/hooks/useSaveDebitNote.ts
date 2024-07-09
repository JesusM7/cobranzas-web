import { useState } from "react";
import axios from "axios";
import { config } from "../config";
import useSession from "./useSession";
import { CreateDebitNoteValues } from "../pages/documents/debit-notes/partials/CreateDebitNotePage";

export default function useSaveDebitNote() {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const { token } = useSession();

    const saveDebitNote = async (debitNote: CreateDebitNoteValues) => {
        setLoading(true);
        try {
            await axios.post(`${config.api}/api/v1/debit-note`, debitNote, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setError(null);
        } catch (error) {
            setError("Error al guardar la nota de debito");
        } finally {
            setLoading(false);
        }
    };

    return {
        saveDebitNote,
        loading,
        error,
    }

}