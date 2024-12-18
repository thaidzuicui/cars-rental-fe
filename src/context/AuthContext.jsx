import React, { createContext, useState, useContext } from "react";
import { checkToken } from "../lib/utils";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [hasToken, setHasToken] = useState(checkToken());
  const login = (token) => {
    setHasToken(true);
  };

  const logout = () => {
    setHasToken(false);
  };

  return (
    <AuthContext.Provider value={{ hasToken, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
