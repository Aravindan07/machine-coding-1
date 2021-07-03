import React, { useState } from "react";
import "./styles.css";

function Sidebar({ getSort, getFilterType, products, clearFilter, getFilterSize }) {
	const [gender, setGender] = useState("All");
	const [productSize, setProductSize] = useState("All");

	const onGenderSelect = (e) => {
		console.log(e.target.value);
		setGender(e.target.value);
		getFilterType(e.target.value);
	};

	const onSizeSelect = (e) => {
		setProductSize(e.target.value);
		getFilterSize(e.target.value, "size");
	};

	const onSortClick = (type) => {
		getSort(type);
	};

	return (
		<div className="sidebar-wrap">
			<div className="sidebar-inner-wrap">
				<div>
					<h3>Ideal for</h3>

					<select
						name="ideal"
						id="ideal"
						value={gender}
						onChange={(e) => onGenderSelect(e)}
					>
						<option value="All">All</option>
						<option value="Men">Men</option>
						<option value="Women">Women</option>
					</select>

					<h3>Brands</h3>
					<div className="m-1rem">
						<input
							type="checkbox"
							id="Us Polo"
							name="Us Polo"
							value="Us Polo"
							onClick={() => getFilterType("Us Polo")}
						/>
						<label htmlFor="Us Polo">Us Polo</label>
					</div>

					<div className="m-1rem">
						<input
							type="checkbox"
							id="Louis Phillipe"
							name="Louis Phillipe"
							value="Louis Phillipe"
							onClick={() => getFilterType("Louis Phillipe")}
						/>
						<label htmlFor="Louis Phillipe"> {"Louis Phillipe"}</label>
					</div>

					<div className="m-1rem">
						<input
							type="checkbox"
							id="Metronaut"
							name="Metronaut"
							value="Metronaut"
							onClick={() => getFilterType("Metronaut")}
						/>
						<label htmlFor="Metronaut"> {"Metronaut"}</label>
					</div>
				</div>

				<h3>Filter by size</h3>
				<select
					name="ideal"
					id="ideal"
					value={productSize}
					onChange={(e) => onSizeSelect(e)}
				>
					<option value="All">All</option>
					<option value="S">S</option>
					<option value="M">M</option>
					<option value="L">L</option>
					<option value="XL">XL</option>
				</select>

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
			</div>
			<p style={{ color: "red", cursor: "pointer" }} onClick={clearFilter}>
				Clear Filters
			</p>
		</div>
	);
}

export default Sidebar;
