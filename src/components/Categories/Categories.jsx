import "./Categories,.css";
import React from "react";
import { Link } from "react-router-dom";

export default function Categories() {
	return (
		<div>
			<ul className="categories-nav">
				<li>
					<Link to="/category/biografico">Biografico</Link>
				</li>
				<li>
					<Link to="/category/ficcion">Ficcion</Link>
				</li>
			</ul>
		</div>
	);
}
