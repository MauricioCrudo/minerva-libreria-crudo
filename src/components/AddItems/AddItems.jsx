import React, { useContext, useState } from "react";
import "./AddItems.css";
// firebase
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase";

// context
import { UserContext } from "../../context/UserContext";
// router
import { Link } from "react-router-dom";

export default function AddItems() {
	// User Context
	const { admin } = useContext(UserContext);
	// States
	const [author, setAuthor] = useState("");
	const [name, setName] = useState("");
	const [description, setDesc] = useState("");
	const [price, setPrice] = useState(0);
	const [stock, setStock] = useState(0);
	const [img, setImg] = useState("");
	const [category, setCategory] = useState("");

	// Handles
	const handleName = (e) => setName(e.target.value.toUpperCase());
	const handleAuthor = (e) => setAuthor(e.target.value.toUpperCase());
	const handleDesc = (e) => setDesc(e.target.value);
	const handlePrice = (e) => setPrice(e.target.value);
	const handleStock = (e) => setStock(e.target.value);
	const handleImg = (e) => setImg(e.target.value);
	const handleCategory = (e) => setCategory(e.target.value.toUpperCase());
	// reset form
	const resetForm = () => {
		setName("");
		setAuthor("");
		setDesc("");
		setPrice(0);
		setStock(0);
		setImg("");
		setCategory("");
	};
	// Submit
	const handleSubmit = (e) => {
		e.preventDefault();
		// Validacion
		if (
			![name, description, author, category, img].some((field) => field === "")
		) {
			const itemCollection = collection(db, "Items");
			const newItem = {
				name,
				author,
				description,
				price,
				stock,
				category,
				img,
			};
			addDoc(itemCollection, newItem).then((doc) => {
				console.log("el documento se guardo correctamente", doc.id);
				resetForm();
			});
		} else {
			console.log("faltan campos");
		}
	};
	return (
		<div className="add-wrapper">
			{admin ? (
				<form className="add-form">
					<label htmlFor="name">Titulo del libro</label>
					<input type="text" name="name" onChange={handleName} value={name} />
					<label htmlFor="author">Nombre del autor</label>
					<input
						type="text"
						name="author"
						value={author}
						onChange={handleAuthor}
					/>
					<label htmlFor="description">Descripción del libro</label>
					<textarea
						className="textarea-desc"
						name="description"
						value={description}
						onChange={handleDesc}
					/>
					<label htmlFor="price">Ingrese el valor (solo numeros)</label>
					<input
						type="number"
						name="price"
						value={price}
						onChange={handlePrice}
					/>
					<label htmlFor="category">Indica la categoria del libro</label>
					<input
						type="text"
						name="category"
						onChange={handleCategory}
						value={category}
					/>
					<label htmlFor="stock">Cuantos libros hay en stock</label>
					<input
						type="number"
						name="stock"
						value={stock}
						onChange={handleStock}
					/>
					<label htmlFor="img">Link a la caratula del libro</label>
					<input type="text" name="img" onChange={handleImg} value={img} />
					<button onClick={handleSubmit}>Enviar</button>
				</form>
			) : (
				<>
					<h2>Parece que no deberias estar aqui...</h2>
					<span>
						Si eres administrador ingresa con el usuario admin, sino{" "}
						<Link to="/" className="go-back-link">
							vuelve al inicio
						</Link>
					</span>
				</>
			)}
		</div>
	);
}
