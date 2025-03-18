import React from 'react'
import SearchBar from './SearchBar'
import MenuBar from './MenuBar'
import HomeProduct from './HomeProduct'
import img1 from '../assets/Products/1.jpg'
import img2 from "../assets/Products/2.jpeg";
import img3 from "../assets/Products/3.jpeg";
import img4 from "../assets/Products/4.webp";
import img5 from "../assets/Products/5.jpg";
import img6 from "../assets/Products/6.jpg";
import img7 from "../assets/Products/7.jpeg";
import img8 from "../assets/Products/8.jpg";

import styles from'./Home.module.css';
const Home = () => {
  return (
		<>
			<div id="header2">
				<SearchBar />
				<MenuBar />
			</div>
			<div className={styles.imgBox}>
				<div className={styles.img}>
					<p>Welcome to GharGhatti! Book your orders now.</p>
				</div>
			</div>
			<div className={styles.boxMain}>
				<HomeProduct imgs={[img1, img2, img3, img4]} key={"0"}></HomeProduct>
				<HomeProduct imgs={[img5, img6, img7, img8]} key={"1"}></HomeProduct>
			</div>
		</>
	);
}

export default Home