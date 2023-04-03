import { createContext } from "react";
import { data } from "../data";
import { useState } from "react";
import { useContext } from "react";
import { CartContex } from "./CartProvider";

export const ProductContex = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(data);
  const {cart, setCart} = useContext(CartContex);
  
  const addItem = (item) => {
    setCart([...cart, item]);
  };
  return (
    <ProductContex.Provider value={{ products, addItem }}>
      {children}
    </ProductContex.Provider>
  );
};
export default ProductProvider;
