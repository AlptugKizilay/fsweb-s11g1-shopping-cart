import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { ScNav } from "./scParts";
import { CartContex } from "../contexts/CartProvider";


const Navigation = (props) => {
  const { cart, setCart } = useContext(CartContex);
  return (
    <ScNav>
      <nav className="content">
        <NavLink to="/">Products</NavLink>
        <NavLink to="/cart">
          Cart <span>{cart.length}</span>
        </NavLink>
      </nav>
    </ScNav>
  );
};

export default Navigation;
