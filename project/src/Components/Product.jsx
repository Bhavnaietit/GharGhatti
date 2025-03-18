import React from 'react'
import styles from "./AllProducts.module.css";
import { NavLink } from 'react-router-dom';
import orders from "../orders.js";
const Product = ({ item }) => {
	const { name, img, price,category } = item;
	return (
		<div className={styles.box}>
			<img src={img} className={styles.img}></img>
			<p>{name}</p>
			<p>{price}</p>
			<button className={styles.add} onClick={() => {
				
				const newItem = {
					name,
					img, price,
					category
				};
				console.log(item);
				console.log(orders)
				orders.push(newItem);
			}}>Add to Card</button>
			<NavLink to={`/${name}`} className={styles.full}>View Full</NavLink>
		</div>
	);
};

export default Product