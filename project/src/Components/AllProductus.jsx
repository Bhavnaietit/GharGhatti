import React, { useState } from "react";
import Categories from "../Data.js";
import Product from "./Product.jsx";
import SearchBar from "./SearchBar";
import MenuBar from "./MenuBar";
import homeimg from '../assets/HomePagePics/HomeImage.jpg'
import styles from './AllProducts.module.css'
const AllProducts = () => {
	const [searchQuery, setSearchQuery] = useState('');
	const [selectQuery, setSelectQuery] = useState('');
	
	const Products =Categories.map((item) => {
					return (
						<Product
							key={item.name}
							item={item}></Product>
					); 
				 })
	
	

	function handleSearchBar(e) {
		console.log(e.target.value);
		setSearchQuery(e.target.value)
	}
	function handleMenuBar(e) {
		console.log(e.target.value);
		setSelectQuery(e.target.value);
	}
    return (
			<>
				
				<div id="header2">
					<SearchBar handleSearchBar={handleSearchBar} />
					<MenuBar  handleMenuBar={handleMenuBar}/>
				</div>
				<div className={styles.imgBox}>
					<div className={styles.img}>
						<img src={homeimg}></img>
					</div>
				</div>
				<div>
					<div className={styles.Boxes}>
						{Products.filter((item) => {
							
							return (
								item.props.item.name.toLowerCase().includes(searchQuery) &&
								item.props.item.name.toLowerCase().includes(selectQuery.toLowerCase())
							);
						})}
					</div>
				</div>
			</>
		);
};

export default AllProducts;
