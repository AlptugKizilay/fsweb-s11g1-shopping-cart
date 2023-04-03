import React from "react";
import { ScCartItem, ScCartItemDetails } from "./scParts";
import { useContext } from "react";
import { CartContex } from "../contexts/CartProvider";

const Item = (props) => {
  const { cart, setCart } = useContext(CartContex);
  return (
    <ScCartItem>
      <img src={props.image} alt={`${props.title} book`} />

      <ScCartItemDetails>
        <h2>{props.title}</h2>
        <p>$ {props.price}</p>
        <button
          onClick={() => {
            setCart(
              cart.filter((item) => {
                return item.id != props.id;
              })
            );
          }}
        >
          Remove from cart
        </button>
      </ScCartItemDetails>
    </ScCartItem>
  );
};

export default Item;
