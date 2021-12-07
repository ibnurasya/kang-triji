import React, { useCallback, useEffect } from "react";
import { createContext, useState } from "react";
import produkAPI from "../api/produk";
import userAPI from "../api/user";

export const RootContext = createContext();

const RootContextProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [produk, setProduk] = useState([]);
  const [userDetail, setUserDetail] = useState();

  const fetchProduk = useCallback(() => {
    produkAPI.getProdukList(token).then((res) => setProduk(res));
  }, [token]);

  const fetchUserDetail = useCallback(() => {
    userAPI.userDetail(token).then((res) => setUserDetail(res));
  }, [token]);

  useEffect(() => {
    fetchProduk();
    fetchUserDetail();
  }, [token]);

  return (
    <RootContext.Provider value={{ token, setToken, produk, userDetail }}>
      {children}
    </RootContext.Provider>
  );
};

export default RootContextProvider;
