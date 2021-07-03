export function sortProducts(products, sortType) {
	console.log("products", products);
	if (sortType === "lowToHigh") {
		return [...products].sort((a, b) => a.price - b.price);
	}
	if (sortType === "highToLow") {
		return [...products].sort((a, b) => b.price - a.price);
	}
	return products;
}

export const getFilteredData = (products, filter) => {
	return filter
		? products.filter((el) => (el.for === filter ? el.for === filter : el.brand === filter))
		: products;
};

// export const getFilteredDatas = (products, filterTypes) => {
//   products.filter(el => filterTypes.includes(el.for)
// };

export function getBrands(products) {
	return products.map((el) => el.brand);
}
