import React, { useState } from 'react'
import styles from './orders.module.css';
import  orderItems from '../orders.js';
let initquantity = [];

const OrdersAndReturn = () => {
	const [orders, setOrders] = useState(orderItems);
    let i = 1;
    const total = orders.reduce((prev, curr) => {
        return prev + parseInt(curr.price);
    }, 0);
    
	function handleQuantity(e) {
		e.target.value = e.target.value + 1;
		console.log(e.target);
	}

  return (
		<div className={styles.container}>
			<table className={styles.form}>
				<thead>
					<tr>
						<th colSpan={5}>Orders</th>
					</tr>
					<tr>
						{/* <th>No.</th> */}
						<th>Product</th>
						<th>Category</th>
					  <th>Quantity</th>
					  <th>Delete</th>
						<th>Price</th>
					</tr>
				</thead>
				<tbody>
					
                  {orders.map((order)=>{
                      return (
							<tr key={i++}>
                              {/* <td>{i++}</td> */}
                              <td>
                                  <div className={styles.img}>
                                      <img src={order.img}></img>
                                      <p> {order.name}</p>
                                  </div>
                              </td>
                              <td>{order.category}</td>
							  <td>
								  <input type="number" value={1}   onChange={handleQuantity}></input>
							  </td>
							  <td><button onClick={() => {
								    setOrders([
											...orders.filter((item) => {
												return item.name != order.name;
											}),
										]);
							  }}> delete</button></td>
                              <td>{order.price}</td>
						    </tr>
							);
                    })}
				</tbody>
				<tfoot>
					<tr>
						<td colSpan={4}>Total:</td>
                      <td>{total}</td>
					</tr>
				</tfoot>
			</table>
		</div>
	);
}

export default OrdersAndReturn