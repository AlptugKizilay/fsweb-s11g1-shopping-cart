import { useState } from "react";
import { createContext } from "react";

export const CartContex = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    return(
        <CartContex.Provider value={{cart,setCart}}>
            {children}
        </CartContex.Provider>
    )
}

export default CartProvider;