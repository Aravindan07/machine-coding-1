import React, { useState } from "react";
import { getBrands } from "../../utils.js/sortAndFilter";
import "./styles.css";

function Sidebar({ getSort, getFilterType, products }) {
	// const [checked, setChecked] = useState(false);

	const onSortClick = (type) => {
		getSort(type);
	};

	const onFilterClick = (e) => {
		getFilterType(e.target.value);
	};

	return (
		<div className="sidebar-wrap">
			<div className="sidebar-inner-wrap">
				<div>
					<h3>Ideal for</h3>
					<div className="m-1rem">
						<input
							type="checkbox"
							id="men"
							name="Men"
							value="Men"
							// checked={checked}
							onChange={(e) => onFilterClick(e)}
						/>
						<label htmlFor="men"> Men</label>
					</div>
					<div className="m-1rem">
						<input
							type="checkbox"
							id="women"
							name="women"
							value="Women"
							onClick={(e) => onFilterClick(e)}
						/>
						<label htmlFor="women"> Women</label>
					</div>

					{getBrands(products).map((brand) => (
						<div key={brand} className="m-1rem">
							<input
								type="checkbox"
								id={brand}
								name={brand}
								value={brand}
								onClick={(e) => onFilterClick(e)}
							/>
							<label htmlFor="women"> {brand}</label>
						</div>
					))}
				</div>

				<div>
					<h3>Sort By</h3>
					<div className="m-1rem">
						<label className="mb-8">
							<input
								type="radio"
								name="sort"
								className="mr-5"
								onClick={() => onSortClick("highToLow")}
							></input>
							Price - High to Low
						</label>
					</div>

					<div className="m-1rem">
						<label className="mb-8">
							<input
								type="radio"
								name="sort"
								className="mr-5"
								onClick={() => onSortClick("lowToHigh")}
							></input>
							Price - Low to High
						</label>
					</div>
				</div>
				<p style={{ color: "red", cursor: "pointer" }}>Clear Filters</p>
			</div>
		</div>
	);
}

export default Sidebar;
