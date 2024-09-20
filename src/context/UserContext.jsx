import { createContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [previousPath, setPreviousPath] = useState(null);
  const { pathname } = useLocation();

  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) || {}
  );
  const [isLoggedIn, setIsLoggedIn] = useState(
    JSON.parse(localStorage.getItem("isLoggedIn")) || false
  );
  const [access, setAccess] = useState(
    JSON.parse(localStorage.getItem("user"))?.role || ""
  ); // ADMIN or STAFF based on token.

  useEffect(() => {
    if (pathname !== "/login") {
      setPreviousPath(pathname);
      console.log(pathname);
    }
  }, [pathname]);

  const loginUser = (userData) => {
    setUser(userData);
    setAccess(userData.role);
    setIsLoggedIn(true);
    localStorage.setItem("user", JSON.stringify(userData));
    localStorage.setItem("isLoggedIn", true);
    localStorage.setItem("access", userData.role);
  };

  const logoutUser = () => {
    setUser({});
    setAccess("");
    setIsLoggedIn(false);
    localStorage.removeItem("user");
    localStorage.setItem("isLoggedIn", false);
    localStorage.removeItem("access");
  };

  const values = {
    user,
    setUser,
    isLoggedIn,
    setIsLoggedIn,
    access,
    setAccess,
    previousPath,
    loginUser,
    logoutUser,
  };

  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};
