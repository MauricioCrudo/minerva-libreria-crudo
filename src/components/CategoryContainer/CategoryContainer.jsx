import React, { useEffect, useState } from "react";
import { getItems } from "../../API/index";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import Loader from "../Loader/Loader";
export default function CategoryContainer() {
	const [itemsList, setItemsList] = useState([]);
	const { category } = useParams();

	// Traer los items de la API y filtrarlos por categoria.
	useEffect(() => {
		getItems()
			.then((items) => {
				let item = items.filter((i) => {
					return i.category === category;
				});
				setItemsList(item);
				console.log(itemsList);
			})
			.catch((error) => {
				console.log(error);
			});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [category]);

	return (
		<div className="item-list-container">
			{itemsList.length === 0 ? (
				<div className="loader-wrapper">
					<Loader />
				</div>
			) : (
				<ItemList items={itemsList} />
			)}
			<div className="item-counter-container"></div>
		</div>
	);
}
