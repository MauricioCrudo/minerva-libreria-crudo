import React, { useState, useContext } from "react";
import "./CartCheckout.css";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase";
import CheckoutSucces from "../../components/CheckoutSucces/CheckoutSucces";
import { UserContext } from "../../context/UserContext";
export default function CartCheckout() {
	// Context
	const { cart, clear, total } = useContext(CartContext);
	const { user, signIn } = useContext(UserContext);

	// States
	const [phone, setPhone] = useState(0);
	const [email, setEmail] = useState("");
	const [formInput, setFormInput] = useState("");

	//   Handles
	const handleBuyerPhone = (e) => setPhone(e.target.value);
	const handleBuyerEmail = (e) => setEmail(e.target.value);
	const handleUserInput = (e) => {
		e.preventDefault();
		setFormInput(e.target.value);
	};

	// Function

	function handleLogSubmit() {
		signIn(formInput);
	}

	const onSubmit = (e) => {
		e.preventDefault();
		if (![user, phone, email].some((field) => field === "")) {
			const orderCollection = collection(db, "orders");
			const newBuyer = {
				user,
				phone,
				email,
			};
			let date = new Date();
			let items = cart;
			let newOrder = { newBuyer, items, date };
			addDoc(orderCollection, newOrder)
				.then((doc) => {
					console.log("se guardo correctamente", doc.id);
				})
				.catch((error) => {
					console.log(error);
				});
			clear();
		} else {
			alert("faltan llenar campos");
		}
	};

	return (
		<div className="buyer-form-wrapper">
			{cart.length === 0 ? (
				<CheckoutSucces />
			) : user ? (
				<>
					<form className="buyer-form">
						<label htmlFor="phone">Ingrese su numero de telefono</label>
						<input
							onChange={handleBuyerPhone}
							type="tel"
							placeholder="ej: 11 1234 5678"
							required
						/>
						<label htmlFor="email">Ingrese su email</label>
						<input
							type="email"
							placeholder="ejemplo@mail.com"
							onChange={handleBuyerEmail}
							required
						/>
						<Link to="/checkout/success">
							{" "}
							<button
								onClick={(e) => {
									e.preventDefault();
									onSubmit(e);
									console.log(cart);
								}}
							>
								Finalizar compra
							</button>
						</Link>
					</form>
					<div className="checkout-cart">
						{cart.map((item) => (
							<div key={item.id} className="cart-item">
								<img src={item.img} alt={item.name} />
								<h3>{item.name}</h3>
								<p> Cantidad: {item.itemCount}</p>
								<p>Precio por unidad : ${item.price}</p>
							</div>
						))}
						<p>Precio final: ${total}</p>
					</div>
					:
				</>
			) : (
				<form>
					<h1>Ingresa un usuario para continuar</h1>
					<input
						type="text"
						onChange={handleUserInput}
						placeholder="Ingresa tu usuario"
					/>
					<button type="submit" onClick={handleLogSubmit}>
						Ingresar usuario
					</button>
				</form>
			)}
		</div>
	);
}
