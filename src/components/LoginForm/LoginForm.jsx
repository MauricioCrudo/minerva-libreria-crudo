import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
/* import { useNavigate } from "react-router-dom"; */
import "./LoginForm.css";

export default function LoginForm() {
	const { signIn } = useContext(UserContext);
	const [formInput, setFormInput] = useState("");

	function handleInput(e) {
		let input = e.target.value;
		setFormInput(input);
		// signIn(inputUser);
	}
	function handleSubmit(e) {
		signIn(formInput);
	}

	return (
		<div className="login-form-wrapper">
			<form>
				<label htmlFor="user">Ingrese su nombre de usuario</label>
				<input
					type="text"
					name="user"
					placeholder="Ingrese su nombre on ingrese 'admin' para entrar en modo administrador"
					onChange={handleInput}
				/>
				{formInput ? (
					<Link to="/">
						<div>
							<button onClick={handleSubmit}>Ingresar</button>
						</div>
					</Link>
				) : (
					<button
						onClick={(e) => {
							e.preventDefault();
						}}
					>
						Ingrese su usuario{" "}
					</button>
				)}
			</form>
		</div>
	);
}
