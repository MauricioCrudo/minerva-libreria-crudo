import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import "./Cart.css";
import CartItem from "../../components/CartItem/CartItem";
export default function Cart() {
  // hooks
  const { cart, clear, removeFromCart } = useContext(CartContext);
  const [fullPrice, setFullPrice] = useState([]);
  // functions
  useEffect(() => {
    let total = cart
      .map((item) => item.price * item.itemCount)
      .reduce((prev, curr) => prev + curr, 0);
    setFullPrice(total);
  }, [cart]);

  function removeItem(itemid) {
    const newArray = cart.filter((book) => book.id !== itemid);
    console.log(newArray);
    removeFromCart(newArray);
  }

  return (
    <div className="CartContainer">
      {cart.length === 0 ? (
        <>
          <div className="empty-cart">
            <h3>No hay items en el carrito</h3>
            <Link to="/">
              <p>Volver al inicio</p>
            </Link>
          </div>
        </>
      ) : (
        <>
          <Link to="/">
            <p>Seguir comprando</p>
          </Link>
          {cart.map((item) => (
            <CartItem key={item.id} item={item} removeItem={removeItem} />
          ))}
          <button onClick={clear}>Vaciar Carrito</button>
          <Link to="/cart-checkout">
            <button>Finalizar Compra</button>
          </Link>
          <p>Precio Final : ${fullPrice}</p>
        </>
      )}
    </div>
  );
}
