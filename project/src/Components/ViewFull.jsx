import React from 'react'
import data from '../Data.js';
import styles from './ViewFull.module.css'
import { Link, useParams } from 'react-router-dom';
const ViewFull = ({ item }) => {
    const currName = useParams();
    console.log(currName.viewfull);
    const currItem = data.filter((item) => {
        return item.name == currName.viewfull;
    });
    console.log(currItem[0]);
    const { img, about, name, available, category, decs, price, weight } =
			currItem[0];
    return (
			<>
				<div className={styles.navbar2}>
					<div className={styles.navBox1}>
						<i className="fa-solid fa-bars"></i>
					</div>

					<div className={styles.navBox3}>
						{/* <!-- icon of login/shop/search --> */}
						<Link to={"/"}>
							<i className="fa-solid fa-house"></i>
						</Link>
						<Link to={"/Login"}>
							<i className="fa-solid fa-user"></i>
						</Link>
						<Link to={"/allProducts"}>
							<i class="fa-solid fa-magnifying-glass"></i>
						</Link>
					</div>
				</div>

				<div className={styles.navbar3}>
					<Link to="/">Home </Link>
					<Link to="/allProducts">All Products</Link>
					<a href="/orders">
						<i className="fa-solid fa-shop"></i>
					</a>
				</div>
				<div className={styles.item}>
					<div className={styles.img}>
						<img src={img}></img>
					</div>

					<div className={styles.info}>
						<h3 id={styles.itemName}>{name}</h3>
						<p id={styles.itemPrice}>Rs.{price}/-</p>
						<p id={styles.aboutItem}> {about}</p>
						<p id={styles.itemSize}> Weight:{weight}</p>
						<div id={styles.btns}>
							<div id={styles.quantity}>
								<button>
									<i className="fa-solid fa-plus" id={styles.max}></i>
								</button>
								<p id={styles.val}>0</p>
								<button>
									<i className="fa-solid fa-minus " id={styles.min}></i>
								</button>
							</div>
							<button id={styles.Like}>
								<i className="fa-regular fa-heart"></i>
								<p id={styles.count}></p>
							</button>
						</div>
						<p className={styles.Iteminfo}>Vendor: GharGhatti-Spices</p>
						<p className={styles.Iteminfo}>Avaliability:{available}</p>
						<p className={styles.Iteminfo}>Categories:{category}</p>

						<p id={styles.card}>
							<button id={styles.btn}>ADD TO CART </button>
						</p>
					</div>
				</div>
				<div id={styles.descriptionBox}>
					<p id={styles.heading}>-: Description :-</p>
					<p id={styles.descriptions}>{decs}</p>
				</div>
			</>
		);
}

export default ViewFull