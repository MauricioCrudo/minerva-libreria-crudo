import { useState } from "react";
import "./ItemCount.css";
export default function ItemCount({ stock, onAdd, inicial }) {
  // cambio en el estado del contador
  const [counter, setCounter] = useState(inicial);
  // funciones del contador
  const add = () => {
    if (counter < stock) {
      setCounter(counter + 1);
    }
  };

  const dec = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };
  const addToCart = () => {
    onAdd(counter);
  };
  // html
  return (
    <div className="item-count-container">
      <div className="counter">
        <button onClick={dec}>-</button>
        <p>{counter}</p>
        <button onClick={add}>+</button>
      </div>
      <div className="add-to-cart">
        <button onClick={addToCart}>Agregar al carrito</button>
      </div>
    </div>
  );
}
