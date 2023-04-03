import { createContext, useEffect } from "react";
import { data } from "../data";
import { useState } from "react";
import { useContext } from "react";
import { CartContex } from "./CartProvider";

export const ProductContex = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(data);
  const { cart, setCart } = useContext(CartContex);

  function writeLocalStorage(data) {
    localStorage.setItem("Carts", JSON.stringify(data));
  }
  function getLocalStorage() {
    const oldCart = localStorage.getItem("Carts");
    /* setCart(oldCart); */
    console.log(oldCart);
  }

  const addItem = (item) => {
    setCart([...cart, item]);
  };

 /*  useEffect(() => {
    getLocalStorage();
  }, []); */
  useEffect(() => {
    writeLocalStorage(cart);
  }, [cart]);

  return (
    <ProductContex.Provider value={{ products, addItem }}>
      {children}
    </ProductContex.Provider>
  );
};
export default ProductProvider;
