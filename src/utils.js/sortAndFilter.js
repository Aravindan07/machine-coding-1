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

export const getFilteredData = (products, filter, size, filterBy) => {
	if (filter === "All") {
		return products;
	}
	if (filterBy === "size" && size === "All") {
		return products;
	}
	if (filterBy === "size") {
		return products.filter((el) => el.size === size);
	}
	return filter
		? products.filter((el) => (el.for === filter ? el.for === filter : el.brand === filter))
		: products;
};

export function filterBySize(products, size) {
	return products.filter((el) => el.size === size);
}

export const getFilteredDataByBrand = (products, filterType, filterBy) => {
	return filterType ? products.filter((el) => el.brand === filterType) : products;
};

export function getBrands(products) {
	return products.filter(function (item, index, products) {
		return products.indexOf(item) === index;
	});
}
