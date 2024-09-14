import Home from "@/pages/Home";
import Orders from "@/pages/Orders";
import ProductsPage from "@/pages/ProductsPage";
import CustomersPage from "@/pages/CustomersPage";
import SettingsPage from "@/pages/SettingsPage";
import ProductDetailsPage from "@/pages/ProductDetailsPage";
import Login from "@/pages/Login";
import Layout from "../layout/Layout";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <Home /> },
      { path: "/login", element: <Login /> },
      { path: "/orders", element: <Orders /> },
      { path: "/all-products", element: <ProductsPage /> },
      { path: "/customers", element: <CustomersPage /> },
      { path: "/settings", element: <SettingsPage /> },
      { path: "/add-product/:id", element: <ProductDetailsPage /> },
      { path: "/edit-product/:id", element: <ProductDetailsPage /> },
    ],
  },
]);

export default router;
