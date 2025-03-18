import styles from "./StylesSec/login.module.css";
console.log(styles);
const Login = ({ loginHandler, setEmail, setPassword }) => {
	function emailSet(e) {
		let email = e.target.value;
		setEmail(email);
	}
	function passwordSet(e) {
		let pass = e.target.value;
		setPassword(pass);
	}

    return (
			
				<form className={styles.loginPage}>
					<label>
						Email:
						<input
							className={styles.input}
							type="email"
							onChange={emailSet}></input>
					</label>
					<label>
						Password:
						<input type="password" onChange={passwordSet}></input>
					</label>
                <button onClick={loginHandler}> login </button>
               
            </form>
		);
};
export default Login;
