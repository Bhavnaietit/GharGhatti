import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Navbar= () => {
  return (
		<div>
			<ul className="header-list">
				<li>
					<NavLink
						to="/"
						className={({ isActive }) =>
							isActive ? "underline" : "non-underline"
						}>
						Home
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/allproducts"
						className={({ isActive }) =>
							isActive ? "underline" : "non-underline"
						}>
						All Products
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/about"
						className={({ isActive }) =>
							isActive ? "underline" : "non-underline"
						}>
						About
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/orders"
						className={({ isActive }) =>
							isActive ? "underline" : "non-underline"
						}>
						Orders & Returns
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/contact"
						className={({ isActive }) =>
							isActive ? "underline" : "non-underline"
						}>
						Contact
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/login"
						className={({ isActive }) =>
							isActive ? "underline" : "non-underline"
						}>
						Login
					</NavLink>
				</li>
			</ul>
		</div>
	);
}

export default Navbar