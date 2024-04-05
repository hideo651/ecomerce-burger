/* eslint-disable react/prop-types */
import React from "react";
import produtos from "../Database/Database";

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [dados, setDados] = React.useState([]);
  const [carrinho, setCarrinho] = React.useState([]);
  const [product, setProduct] = React.useState([]);
  console.log("");

  React.useEffect(() => {
    setDados(produtos);
    setProduct(produtos);
  }, []);

  return (
    <GlobalContext.Provider
      value={{ dados, setDados, carrinho, setCarrinho, product, setProduct }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
