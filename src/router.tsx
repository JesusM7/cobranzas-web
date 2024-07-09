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
import CreateSellerPage from "./pages/sellers/CreateSellerPage";
import SellerPage from "./pages/sellers/SellerPage";
import ExchangeRateList from "./pages/enchange-rate/ExchangeRateList";
import InvoicePage from "./pages/documents/invoices/InvoicePage";
import CreateInvoicePage from "./pages/documents/invoices/partials/CreateInvoicePage";
import ChargesPage from "./pages/documents/invoices/ChargesPage/ChargesPage";

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
                        <ProductPage />
                    </ProtectedRoute>
                } />
                <Route path="crear-producto" element={
                    <ProtectedRoute>
                        <CreateProductPage />
                    </ProtectedRoute>
                } />
                <Route path="vendedores" element={
                    <ProtectedRoute>
                        <SellerPage />
                    </ProtectedRoute>
                } />
                <Route path="crear-vendedor" element={
                    <ProtectedRoute>
                        <CreateSellerPage />
                    </ProtectedRoute>
                } />
                <Route path="tasas" element={
                    <ProtectedRoute>
                        <ExchangeRateList />
                    </ProtectedRoute>
                } />
                <Route path="facturas" element={
                    <ProtectedRoute>
                        <InvoicePage />
                    </ProtectedRoute>
                } />
                <Route path='facturas/:invoiceNumber/abonos' element={
                    <ProtectedRoute>
                        <ChargesPage />
                    </ProtectedRoute>
                } />
                <Route path="crear-factura" element={
                    <ProtectedRoute>
                        <CreateInvoicePage />
                    </ProtectedRoute>
                } />
            </Route>
            <Route path="/login" element={<LoginPage />} />
        </>,
    )
);