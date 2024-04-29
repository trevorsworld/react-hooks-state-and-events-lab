import React from "react";
import { useState } from "react";

function Item({ name, category }) {

    const [cart,setCart] = useState(false);

    const toggleCart = () => {
      setCart(!cart);
    }


    return (
      <li className={cart ? "in-cart" : ""}>
        <span>{name}</span>
        <span className="category">{category}</span>
        <button className="add" onClick={toggleCart}>
          {cart ? "Remove from Cart" : "Add to Cart"}
        </button>
      </li>
    );
  }
  
  export default Item;