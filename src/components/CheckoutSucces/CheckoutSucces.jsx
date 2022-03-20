import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
export default function CheckoutSucces() {
	const { user } = useContext(UserContext);
	return (
		<div className="success-wrapper">
			<h1>Gracias {user} por realizar tu compra!</h1>
			<Link to="/">
				<p>Volver al inicio</p>
			</Link>
		</div>
	);
}
