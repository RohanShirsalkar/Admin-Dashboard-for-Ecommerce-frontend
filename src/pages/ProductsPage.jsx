import React from "react";
import ProductsTable from "../components/ProductsPage/ProductsTable";
import useRouteGuard from "@/hooks/useRouteGuard";

const ProductsPage = () => {
  useRouteGuard();
  return (
    <section className="md:max-w-6xl mx-auto pb-4">
      <div className="mt-6">
        <ProductsTable />
      </div>
    </section>
  );
};

export default ProductsPage;
