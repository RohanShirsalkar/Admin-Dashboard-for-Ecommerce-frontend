import React from "react";
import Navbar from "../components/common/Navbar";
import { Outlet } from "react-router-dom";
import { UserContextProvider } from "@/context/UserContext";
import { FormContextProvider } from "@/context/FormContext";
import { SettingsFormContextProvider } from "@/context/SettingsFormContext";

const Layout = () => {
  return (
    <div>
      <UserContextProvider>
        <FormContextProvider>
          <SettingsFormContextProvider>
            <Navbar />
            <div className="md:max-w-7xl max-w-full px-4 md:px-0 mx-auto">
              <Outlet />
            </div>
          </SettingsFormContextProvider>
        </FormContextProvider>
      </UserContextProvider>
    </div>
  );
};

export default Layout;
