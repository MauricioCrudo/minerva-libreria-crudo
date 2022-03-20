import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  // Current ID
  const [currentId,setCurrentId]=useState('')

  // verificar que este el item en el cart
  function isOnCart(id) {
    const response = cart.some((prod) => prod.id === id);
    return response;
  }
  const [cart, setCart] = useState([]);

  // Agregar los items
  const addToCart = (itemCount, item) => {
    if (isOnCart(item.id)) {
      alert("el item esta en el carrito");
    } else {
      setCart([...cart, { ...item, itemCount }]);
    }
  };

  // remover un item del carrito
  const removeFromCart = (newCart) => {
    setCart(newCart);
  };

  // Remover los items del carrito
  const clear = () => {
    setCart([]);
  };
<<<<<<< HEAD
  const [total, setTotal] = useState(0);
=======
  const [total,setTotal] = useState(0)

>>>>>>> aeb75baa98f9154a23b67eb272b59a34e64bc9d0
  // Total
  useEffect(() => {
    let price = cart
      .map((item) => item.price * item.itemCount)
      .reduce((prev, curr) => prev + curr, 0);
    setTotal(price);
  }, [cart]);

  // Provider
  return (
<<<<<<< HEAD
    <CartContext.Provider
      value={{ cart, setCart, addToCart, clear, removeFromCart, total }}
    >
=======
    <CartContext.Provider value={{ cart, addToCart, clear, removeFromCart,total,currentId,setCurrentId }}>
>>>>>>> aeb75baa98f9154a23b67eb272b59a34e64bc9d0
      {children}
    </CartContext.Provider>
  );
};
export default CartContextProvider;
