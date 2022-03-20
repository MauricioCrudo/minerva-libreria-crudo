import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";

export default function ItemDetail({ item }) {
	const { addToCart } = useContext(CartContext);
	const [itemCount, setItemCount] = useState();

	function onAdd(newItemCount) {
		setItemCount(newItemCount);
		addToCart(newItemCount, item);
	}
	return (
		<div className="item-detail-info">
			<img className="detail-img" src={item.img} alt={item.name} />
			<div className="detail-data">
				<h1 className="detail-name">{item.name}</h1>
				<p className="detail-author">{item.author}</p>
				<p className="detail-price"> ${item.price}.00</p>
				<p className="detail-description">{item.description}</p>
				{!itemCount ? (
					<ItemCount stock={item.stock} inicial={1} onAdd={onAdd} />
				) : (
					<p>
						<Link to="/cart">Ir al carrito</Link>
					</p>
				)}
			</div>
		</div>
	);
}
