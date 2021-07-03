import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Card/Card";
import Sidebar from "../Sidebar/Sidebar";
import "./styles.css";
import { getBrands, getFilteredData, sortProducts } from "../../utils.js/sortAndFilter";

function ProductsPage() {
	const [products, setProducts] = useState([]);
	const [sortType, setSortType] = useState("");
	const [filterType, setFilterType] = useState("");
	// const [filterTypes, setFilterTypes] = useState([]);

	useEffect(() => {
		(async () => {
			const { data } = await axios.get("products.json");
			console.log(data);
			setProducts(data);
		})();
	}, []);

	const getSort = (type) => {
		console.log(type);
		setSortType(type);
	};

	const getFilterType = (type) => {
		console.log(type);
		setFilterType(type);
	};

	let sortedData = sortProducts(products, sortType);
	let filteredData = getFilteredData(sortedData, filterType);
	console.log(filteredData);
	// console.log(getBrands(products));
	return (
		<div className="products-page-wrap">
			<Sidebar getSort={getSort} getFilterType={getFilterType} products={products} />
			<div className="cards-wrapper">
				{filteredData.map((product) => (
					<Card key={product.id} product={product} />
				))}
			</div>
		</div>
	);
}

export default ProductsPage;
