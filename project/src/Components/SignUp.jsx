import styles from "./StylesSec/signup.module.css";
const SignUp = ({ signUpHandler, setSignUpEmail, setSignUpPass }) => {
	function emailSet(e) {
		let email = e.target.value;
		setSignUpEmail(email);
	}
	function passwordSet(e) {
		let pass = e.target.value;
		setSignUpPass(pass);
    }
    function resSetPass(e) {
        console.log(e);
    }
	return (
        <form className={styles.signupPage} onSubmit={(e) => {
            e.stopPropagation();
            console.log(e.target)
        }}>
			<p> You are Login </p>
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
            <button className={styles.signBtn} onClick={signUpHandler}> sign-up </button>
            <button className={styles.forgotBtn} onClick={(e) => {
                e.stopPropagation();
                console.log(e.target);
                let password = prompt('enter new');
                setSignUpPass(password);
            }}>forgot password?</button>
		</form>
	);
};
export default SignUp;
