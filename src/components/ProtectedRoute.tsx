import { ReactNode } from "react";
import useSession from "../hooks/useSession";
import { Navigate } from "react-router-dom";

type ProtectedRouteProps = {
    children: ReactNode;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
    const { isLoggedIn } = useSession();
    if (!isLoggedIn) {
        return <Navigate to="/login" />;
    }
    return children;
}