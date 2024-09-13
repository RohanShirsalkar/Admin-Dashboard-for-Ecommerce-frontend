import useRouteGuard from "@/hooks/useRouteGuard";
import React from "react";

const CustomersPage = () => {
  useRouteGuard();
  return (
    <div>
      <h1>Customers page</h1>
    </div>
  );
};

export default CustomersPage;
