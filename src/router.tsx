import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import LoginPage from "./pages/login/LoginPage";
import ProtectedRoute from "./components/ProtectedRoute"
import Layout from "./components/Layout";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<Layout />}>
                <Route path="" element={
                    <ProtectedRoute>
                        <HomePage />
                    </ProtectedRoute>
                } />
            </Route>

            <Route path="/login" element={<LoginPage />} />
        </>,
    )
);