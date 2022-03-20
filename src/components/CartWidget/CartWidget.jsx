import React, { useContext, useEffect, useState } from "react";
import "./CartWidget.css";
import carrito from "../../assets/images/icons8-shopping-cart-64.png";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
export default function CartWidget(props) {
  const { cart } = useContext(CartContext);
  const [cantidad, setCantidad] = useState(0);
  useEffect(() => {
    let itemCount = cart
      .map((item) => item.itemCount)
      .reduce((prev, curr) => prev + curr, 0);
    setCantidad(itemCount);
  }, [cart]);

  return (
    <div className="cart-widget-wrapper">
      <Link to="/cart">
        <div className="cart-widget">
          <img src={carrito} alt="carrito" />
          {cantidad === 0 ? (
            <></>
          ) : (
            <p className="cart-widget-count">{cantidad}</p>
          )}
        </div>
      </Link>
    </div>
  );
}
