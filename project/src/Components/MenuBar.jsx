import React from "react";

const MenuBar = ({ handleMenuBar }) => {
	return (
		<div id="category">
			<select name="category" id="categorySelect" onChange={handleMenuBar}>
				<option value="" hidden>
					All
				</option>
				<option value="">All</option>
				<option value="Masala">Masala</option>
				<option value="Papad">Papad</option>
				<option value="Pickle"> Pickle</option>
				<option value="Flour">Flour</option>
				<option value="Dal">Dal</option>
				<option value="Powder">Powder</option>
			</select>
		</div>
	);
};

export default MenuBar;
