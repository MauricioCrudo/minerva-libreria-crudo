<<<<<<< HEAD
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
=======
import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext";

export default function CheckoutSucces(){
    const {currentId,setCurrentId} = useContext(CartContext); 
       return(
        <div className="success-wrapper">
            <h1>Gracias por realizar tu compra!</h1>
            <p>Orden #{currentId}</p>
            <Link to="/"><button onClick={()=>{setCurrentId('')}}>Volver al inicio</button></Link>
        </div>
    )
}
>>>>>>> aeb75baa98f9154a23b67eb272b59a34e64bc9d0
