import { useState } from "react";
import Login from "./Login";
import SignUp from "./SignUp";
import styles from './StylesSec/LoginApp.module.css';
import img1 from '../assets/HomePagePics/1.jpg'
import img2 from "../assets/HomePagePics/2.jpg";
const LoginApp = () => {
    
	const [isLogin, setLogin] = useState(
		JSON.parse(localStorage.getItem("state")) || false
	);
	const [loginEmail, setLoginEmail] = useState(null);
	const [loginPassword, setLoginPassword] = useState(null);
	const [signupEmail, setSignUpEmail] = useState(null);
	const [signupPassword, setSignUpPassword] = useState(null);
	function loginHandler() {
		let email = loginEmail;
		let password = loginPassword;
		console.log(email, password);
		if (email == null || password == null) {
			alert("please fill up form!");
		} else if (!email.includes("@")) {
			alert("you fill wrong email!");
		} else if (password.length < 8) {
			alert("password must at least 8 character!");
		} else {
			localStorage.setItem("email", email);
			localStorage.setItem("password", password);
			alert("you have filled the form succesfully!");
			localStorage.setItem("state", JSON.stringify(!isLogin));
			setLogin(true);
		}
	}

	function signUpHandler() {
		let userEmail = localStorage.getItem("email");
		let userPass = localStorage.getItem("password");
		if (userEmail === signupEmail && userPass === signupPassword) {
			alert("you have signed up");
		} else if (userEmail !== signupEmail) {
			alert("plase fill correct email ");
		} else {
			alert("plase fill correct pass ");
		}
	}
    return (
			<div className={styles.mainBox}>
				<div className={styles.formContainer}>
					{isLogin == false ? (
						<div className={styles.formImg}>
							<img src={img1}></img>
						</div>
					) : (
						<div className={styles.formImg}>
							<img src={img2}></img>
						</div>
					)}
					{isLogin == false ? (
						<Login
							loginHandler={loginHandler}
							setEmail={setLoginEmail}
							setPassword={setLoginPassword}></Login>
					) : (
						<SignUp
							signUpHandler={signUpHandler}
							setSignUpEmail={setSignUpEmail}
							setSignUpPass={setSignUpPassword}></SignUp>
                )}
                
                </div>
			</div>
		);
};
export default LoginApp;
