import { createContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState("zara");
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [access, setAccess] = useState("ADMIN");
  const [previousPath, setPreviousPath] = useState(null);
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname !== "/login") {
      setPreviousPath(pathname);
      console.log(pathname);
    }
  }, [pathname]);

  const values = {
    user,
    setUser,
    isLoggedIn,
    setIsLoggedIn,
    access,
    setAccess,
    previousPath,
  };

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};
