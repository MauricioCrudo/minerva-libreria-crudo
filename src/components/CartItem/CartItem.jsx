import { useContext } from "react/cjs/react.development";
import { CartContext } from "../../context/CartContext";

export default function CartItem({ item, removeItem }) {
  // States
  const { cart, setCart } = useContext(CartContext);
  const itemId = item.id;
  let addCount =
    item.itemCount < item.stock ? item.itemCount + 1 : item.itemCount;
  let removeCount = item.itemCount - 1;

  const handleAddCount = (itemId) => {
    let newCart = cart.map((i) => {
      if (i.id === itemId) {
        return {
          ...i,
          itemCount: addCount,
        };
      } else {
        return i;
      }
    });
    setCart(newCart);
  };
  const handleRemoveCount = (itemId) => {
    let newCart = cart.map((i) => {
      if (i.id === itemId && removeCount > 0) {
        return {
          ...i,
          itemCount: removeCount,
        };
      } else {
        return i;
      }
    });
    setCart(newCart);
  };
  return (
    <div key={item.id} className="cart-item">
      <img src={item.img} alt={item.name} />
      <h3>{item.name}</h3>
      <div className="item-count">
        <button
          onClick={() => {
            handleRemoveCount(itemId);
          }}
        >
          -
        </button>
        <p> Cantidad: {item.itemCount}</p>
        <button
          onClick={() => {
            handleAddCount(itemId);
          }}
        >
          +
        </button>
      </div>
      <p>Precio: ${item.price}</p>
      <p>Precio Final : ${item.price * item.itemCount}</p>
      <button
        onClick={() => {
          let itemId = item.id;
          removeItem(itemId);
        }}
      >
        X
      </button>
    </div>
  );
}
