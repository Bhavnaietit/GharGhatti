import React from "react";
import { createRoot } from "react-dom/client";
import Header from "./Components/Header";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router";
import Home from "./Components/Home";
import App from "./App.jsx";
import About from "./Components/About";
import Contact from "./Components/Contact";
import './index.css'
import AllProducts from "./Components/AllProductus.jsx";
import LoginApp  from "./Components/LoginApp.jsx";
import ViewFull from "./Components/ViewFull.jsx";
import OrdersAndReturn from "./Components/OrdersAndReturn.jsx";
const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/allproducts",
				element: <AllProducts />,
			},
			{
				path: "/about",
				element: <About />,
			},
			{
				path: "/contact",
				element: <Contact />,
			},

			{
				path: "/login",
				element: <LoginApp />,
			},
			{
				path: "/:viewfull",
				element: <ViewFull />,
			},
			{
				path: "/orders",
				element: <OrdersAndReturn />,
			},
		],
	},
]);

createRoot(document.getElementById("root")).render(
	<RouterProvider router={router}></RouterProvider>
);
