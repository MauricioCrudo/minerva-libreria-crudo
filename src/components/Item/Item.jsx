import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { CartContext } from "../../context/CartContext";
import "./Item.css";

export default function Item({ item }) {
  // Context y states
  const { addToCart, cart, removeFromCart } = useContext(CartContext);
  const [onCart, setOnCart] = useState(false);
  // functions
  function onAdd(e) {
    e.preventDefault();
    const itemCount = 1;
    addToCart(itemCount, item);
    setOnCart(true);
  }
  function removeItem(e) {
    e.preventDefault();
    const newArray = cart.filter((book) => book.id !== item.id);
    removeFromCart(newArray);
    setOnCart(false);
  }
  return (
    <div className="item">
      <Link to={`/item/${item.id}`}>
        <img src={item.img} alt={item.name} />
        <div className="item-detail">
          <h3 className="item-name">{item.name}</h3>
          <p className="item-author">{item.author}</p>
          <p className="item-price">${item.price}.00</p>
        </div>
      </Link>
      {!onCart ? (
        <button
          onClick={(e) => {
            onAdd(e);
          }}
        >
          Añadir al carrito
        </button>
      ) : (
        <>
          <span>Libro ya en el carrito</span>
          <button
            onClick={(e) => {
              removeItem(e);
            }}
          >
            Eliminar del carrito
          </button>
        </>
      )}
    </div>
  );
}
