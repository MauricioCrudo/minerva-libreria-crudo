import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ItemDetail from "../ItemDetail/ItemDetail";
import Loader from "../Loader/Loader";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase.js";

export default function ItemDetailContainer() {
	// Setear estado de los productos
	const [product, setProduct] = useState();
	// usar parametros del router
	const { itemId } = useParams();
	// encontrar el item que se le hace el detalle en relacion al parametro del router

	const itemRef = doc(db, "Items", itemId);

	useEffect(() => {
		getDoc(itemRef)
			.then((snapshot) => {
				if (snapshot.exists()) {
					setProduct({ id: snapshot.id, ...snapshot.data() });
					console.log(itemId);
				}
			})
			.catch((error) => {
				console.log(error);
			});
	}, [itemId]);

	return (
		<div className="item-detail-container">
			{!product ? (
				<div className="loader-wrapper">
					<Loader />
				</div>
			) : (
				<ItemDetail item={product} />
			)}
		</div>
	);
}
