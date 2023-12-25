import { createContext } from "vm";
import { Basket } from "../models/Basket";
import { useContext } from "react";

interface StoreContextValue {
    basket: Basket | null;
    setBasket: (basket: Basket) => void;
    removeItem: (dishId: number, quantity: number) => void;
}
