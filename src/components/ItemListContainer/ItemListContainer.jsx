import { useState, useEffect } from "react";
import "./ItemListContainer.css";
import ItemList from "../ItemList/ItemList";
import { getItems } from "../../API/index";
import Loader from "../Loader/Loader";
export default function ItemListContainer({ greeting }) {
	const [itemsList, setItemsList] = useState([]);
	useEffect(() => {
		getItems()
			.then((items) => {
				setItemsList(items);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	return (
		<div className="item-list-container">
			{itemsList.length === 0 ? (
				<div className="loader-wrapper">
					<Loader />
				</div>
			) : (
				<ItemList items={itemsList} />
			)}
			<div className="item-counter-container">
				{/* <ItemCount inicial={1} stock={5} onAdd={onAdd} /> */}
			</div>
		</div>
	);
}
