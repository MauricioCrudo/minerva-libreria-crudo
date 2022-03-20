import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
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
	const [total, setTotal] = useState(0);
	// Total
	useEffect(() => {
		let price = cart
			.map((item) => item.price * item.itemCount)
			.reduce((prev, curr) => prev + curr, 0);
		setTotal(price);
	}, [cart]);

	// Provider
	return (
		<CartContext.Provider
			value={{ cart, setCart, addToCart, clear, removeFromCart, total }}
		>
			{children}
		</CartContext.Provider>
	);
};
export default CartContextProvider;
