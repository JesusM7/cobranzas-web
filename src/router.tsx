import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import LoginPage from "./pages/login/LoginPage";
import ProtectedRoute from "./components/ProtectedRoute"
import Layout from "./components/Layout";
import PaymentPage from "./pages/payments/PaymentPage";
import CreateClientPage from "./pages/clients/CreateClientPage";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<Layout />}>
                <Route path="" element={
                    <ProtectedRoute>
                        <HomePage />
                    </ProtectedRoute>
                } />
                <Route path="payments" element={
                    <ProtectedRoute>
                        <PaymentPage />
                    </ProtectedRoute>
                } />
                <Route path="crear-cliente" element={
                    <ProtectedRoute>
                        <CreateClientPage />
                    </ProtectedRoute>
                } />
            </Route>

            <Route path="/login" element={<LoginPage />} />
        </>,
    )
);