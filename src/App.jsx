import { RouterProvider } from "react-router-dom";
import router from "./router/app.router";
import { FormContextProvider } from "./context/FormContext";
import { SettingsFormContextProvider } from "./context/SettingsFormContext";
import { UserContextProvider } from "./context/UserContext";
import useRouteGuard from "./hooks/useRouteGuard";

function App() {
  return (
    <main>
      <RouterProvider router={router} />

      {/* <UserContextProvider>
        <FormContextProvider>
          <SettingsFormContextProvider>
            <RouterProvider router={router} />
          </SettingsFormContextProvider>
        </FormContextProvider>
      </UserContextProvider> */}
    </main>
  );
}

export default App;
