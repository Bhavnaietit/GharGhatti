let btn = document.querySelector("button");
let para = document.querySelector("#para");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confirm = document.querySelector("#confirm");
// const nameVal = Document.querySelector("#name");
let emailVal = "";
let passwordVal = "";
let confirmVal = "";

// for getting email from user
function emailValue(e) {
	emailVal = e.target.value;
	console.log(emailVal);
}
email.addEventListener("input", emailValue);

// for getting password from user
function passwordValue(e) {
	passwordVal = e.target.value;
	console.log(passwordVal);
}
password.addEventListener("input", passwordValue);

// for getting confirm from user
function confirmValue(e) {
	confirmVal = e.target.value;
	console.log(confirmVal);
}
confirm.addEventListener("input", confirmValue);

console.log(localStorage.getItem(emailVal));

btn.addEventListener("click", (e) => {
	console.log("clicked");
	// e.preventDefault();
	if (
		passwordVal.length === 0 ||
		emailVal.length === 0 ||
		confirmVal.length === 0
	) {
		e.preventDefault();
		para.innerText = "something happened wrong!";
	} else if (passwordVal.length < 8) {
		e.preventDefault();
		para.innerText = "password must contain atleast 8 characters!";
	} else if (passwordVal !== confirmVal) {
		e.preventDefault();
		para.innerText = "password doesn't confirm!";
	} else if (passwordVal == localStorage.getItem(emailVal)) {
		e.preventDefault();
		para.innerText = "you have an account!";
	} else {
		localStorage.setItem(emailVal, passwordVal);
		e.preventDefault();
		para.innerText = "you are verified!";
	}
});
