import React from "react";
import { createContext, useState } from "react";
import produk from "../produk";

export const RootContext = createContext();

const RootContextProvider = ({ children }) => {
  const [token, setToken] = useState(null);

  return (
    <RootContext.Provider value={{ token, setToken, produk }}>
      {children}
    </RootContext.Provider>
  );
};

export default RootContextProvider;
