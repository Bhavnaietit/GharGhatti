import React from 'react'
import styles from "./Home.module.css";
const HomeProduct = ({imgs,key}) => {
    return (
        <div className={styles.boxes}>
            {imgs.map((img) => {
                return (
									<div className={styles.box} key={key}>
										<img src={img} className={styles.imgBoxes}></img>
										<a href="#">See More Products</a>
									</div>
								);
            })}
      </div>
		
	);
}

export default HomeProduct