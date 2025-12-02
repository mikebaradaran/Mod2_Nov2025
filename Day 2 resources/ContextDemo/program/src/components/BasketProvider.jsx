import React, { createContext, useContext, useState } from "react";

// Create the context
const BasketContext = createContext();

// Provider component
export const BasketProvider = ({ children }) => {
    const [basket, setBasket] = useState([]);

    const addItem = (item) => {
        setBasket((prev) => [...prev, item]);
    };

    return (
        <BasketContext.Provider value={{ basket, addItem }}>
            {children}
        </BasketContext.Provider>
    );
};

// Custom hook for easier access
export const useBasket = () => useContext(BasketContext);

// otherwise every component using it should do:
// import { useContext } from "react";
// import { BasketContext } from "./BasketProvider";

// export const BasketList = () => {
//   const { basket } = useContext(BasketContext);

// instead of:
// import { useBasket } from "./BasketProvider";

// export const AddToBasket = () => {
//     const { addItem } = useBasket();
