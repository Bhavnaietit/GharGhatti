let btn = document.querySelector("#login");
let para = document.querySelector("#para");
const email = document.querySelector("#email");
const password = document.querySelector("#password");

let emailVal = "";
let passwordVal = "";

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



btn.addEventListener("click", (e) => {
	console.log("clicked");
	e.preventDefault();
	if (
		passwordVal.length === 0 ||
		emailVal.length === 0
	) {
		para.innerText = "something happened wrong!";
	} else if (passwordVal.length < 8) {
		para.innerText = "password must contain atleast 8 characters!";
	} else if (passwordVal ===localStorage.getItem(emailVal)) {
		para.innerText = "password  confirm! you are verified!";
	}
});
