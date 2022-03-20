import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

import CartWidget from "../CartWidget/CartWidget";
import Categories from "../Categories/Categories";
import { UserContext } from "../../context/UserContext";
import { CartContext } from "../../context/CartContext";
export default function NavBar() {
	const [catToggle, setCatToggle] = useState(false);
	const { user, admin, signIn, setAdmin } = useContext(UserContext);
	const { clear } = useContext(CartContext);
	const toggle = (catToggle) => {
		if (catToggle) {
			return <Categories />;
		}
	};
	return (
		<div>
			<div className="nav-bar">
				<div className="upper-bar">
					<div className="logo">
						<Link to={"/"}>
							{/* <img className="imgLogo" src={logo} alt="Logo Minerva" /> */}
							<span className="logo-text">Libreria Minerva</span>
						</Link>
					</div>
					<div className="nav-cart">
						{!user ? (
							<Link className="login-btn" to={"/login"}>
								<span className="login-btn">Ingresar</span>
							</Link>
						) : admin ? (
							<div>
								<span className="welcome-msg">Bienvenido de nuevo, Admin</span>
								<br />
								<span
									className="log-out"
									onClick={() => {
										signIn("");
										setAdmin(false);
										clear();
									}}
								>
									Cerrar sesion
								</span>
							</div>
						) : (
							<div className="User">
								<span className="welcome-msg">Bienvenido de nuevo {user}</span>
								<br />
								<span
									className="log-out"
									onClick={() => {
										signIn("");
										setAdmin(false);
										clear();
									}}
								>
									Cerrar sesion
								</span>
							</div>
						)}
						<CartWidget />
					</div>
				</div>
				<nav>
					<ul>
						<Link to={"/contact"}>
							<li className="navlink">Contacto</li>
						</Link>
						<div
							onMouseEnter={() => {
								setCatToggle(true);
							}}
							onMouseLeave={() => {
								setCatToggle(false);
							}}
						>
							<li className="navlink">Categorias</li>
							<li className="dropdown">{toggle(catToggle)}</li>
						</div>
						{admin ? (
							<Link to={"/add-items"}>
								<li>Agregar Items</li>
							</Link>
						) : null}
					</ul>
				</nav>
			</div>
		</div>
	);
}
