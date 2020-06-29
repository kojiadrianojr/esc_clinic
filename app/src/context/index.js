import React from "react";
import { AuthProvider } from "./auth-context";

const AppProvider = ({ children }) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export default AppProvider;