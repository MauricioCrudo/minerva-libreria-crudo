import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import Cart from "./components/Cart/Cart";
import CategoryContainer from "./components/CategoryContainer/CategoryContainer";
import Categories from "./components/Categories/Categories";
import CartContextProvider from "./context/CartContext";
import CartCheckout from "./components/CartCheckout/CartCheckout";
import CheckoutSucces from "./components/CheckoutSucces/CheckoutSucces";
import LoginForm from "./components/LoginForm/LoginForm";
import UserContextProvider from "./context/UserContext";
import AddItems from "./components/AddItems/AddItems";
import Contact from "./components/Contact/Contact";
function App() {
	return (
		<UserContextProvider>
			<CartContextProvider>
				<BrowserRouter>
					<NavBar />

					<Routes>
						<Route
							path="/"
							element={
								<ItemListContainer
									greeting={"Hola hola y bienvenidos a la libreria"}
								/>
							}
						/>
						<Route path="/category" element={<Categories />} />
						<Route path="/cart" element={<Cart />} />
						<Route path="/category/:category" element={<CategoryContainer />} />
						<Route path="/item/:itemId" element={<ItemDetailContainer />} />
						<Route path="/cart-checkout" element={<CartCheckout />} />
						<Route path="/checkout/success" element={<CheckoutSucces />} />
						<Route path="/add-items" element={<AddItems />} />
						<Route path="/login" element={<LoginForm />} />
						<Route path="/contact" element={<Contact />} />
					</Routes>
				</BrowserRouter>
			</CartContextProvider>
		</UserContextProvider>
	);
}

export default App;
