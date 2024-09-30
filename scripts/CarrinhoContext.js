import React, { createContext, useState } from 'react';

export const CarrinhoContext = createContext();

export const CarrinhoProvider = ({ children }) => {
    const [itensCarrinho, setItensCarrinho] = useState([]);

    const adicionarAoCarrinho = (produto) => {
        setItensCarrinho([...itensCarrinho, produto]);
    };

    return (
        <CarrinhoContext.Provider value={{ itensCarrinho, adicionarAoCarrinho }}>
            {children}
        </CarrinhoContext.Provider>
    );
};