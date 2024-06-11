import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import LoginPage from "./pages/login/LoginPage";
import ProtectedRoute from "./components/ProtectedRoute"
import Layout from "./components/Layout";
import PaymentPage from "./pages/payments/PaymentPage";
import CreateClientPage from "./pages/clients/CreateClientPage";
import CreateProductPage from "./pages/products/CreateProductPage";
import ClientPage from "./pages/clients/ClientPage";
import ProductPage from "./pages/products/ProductPage";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<Layout />}>
                <Route path="" element={
                    <ProtectedRoute>
                        <HomePage />
                    </ProtectedRoute>
                } />
                <Route path="pagos" element={
                    <ProtectedRoute>
                        <PaymentPage />
                    </ProtectedRoute>
                } />
                <Route path="clientes" element={
                    <ProtectedRoute>
                        <ClientPage />
                    </ProtectedRoute>
                } />
                <Route path="crear-cliente" element={
                    <ProtectedRoute>
                        <CreateClientPage />
                    </ProtectedRoute>
                } />
                <Route path="productos" element={
                    <ProtectedRoute>
                        <ProductPage/>
                    </ProtectedRoute>
                } />
                <Route path="crear-producto" element={
                    <ProtectedRoute>
                        <CreateProductPage />
                    </ProtectedRoute>
                } />
            </Route>

            <Route path="/login" element={<LoginPage />} />
        </>,
    )
);