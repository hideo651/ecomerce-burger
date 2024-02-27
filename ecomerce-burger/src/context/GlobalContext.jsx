/* eslint-disable react/prop-types */
import React from "react";

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [dados, setDados] = React.useState([]);
  const [carrinho, setCarrinho] = React.useState([]);

  return (
    <GlobalContext.Provider value={{ dados, setDados, carrinho, setCarrinho }}>
      {children}
    </GlobalContext.Provider>
  );
};
