import React from "react";
import "./styles.css";

function Card({ product }) {
	return (
		<div className="card-wrap">
			<div className="image-container">
				<img src={product.image} alt="product" />
			</div>
			<div className="product-description">
				<p className="product-name">{product.brand}</p>
				<p className="product-describer">{product.description}</p>
				<p className="product-price">Rs. {product.price}</p>
				<div className="product-ratings">
					<span>{product.ratings}</span>
					<img src="https://polish-ui.netlify.app/icons/star.svg" alt="ratings" />
				</div>
				<p className="product-ratings">
					Size: <span className="size">{product.size}</span>
				</p>
				<p className="product-ratings">
					Ideal for: <span className="color-red">{product.for}</span>
				</p>
			</div>
		</div>
	);
}

export default Card;
