let items = getLocalStorage("cart");
let itemList = document.querySelector(".item");
let total = 0;
if(items){
let table = document.querySelector("#table");
let presentItem = document.querySelector("#add-items");
presentItem.style.display = "none";
itemList.setAttribute("class", "newClass");
let tableHeading = document.createElement("tr");


function createRow(item) {
		let tableRow = document.createElement("tr");
		tableRow.innerHTML = `<tr class='row'>
		<td><div> ${item.img} <p>${item.name}</p><p>${item.weight}</p></div> </td>
		<td> <input type ='number'  value=1 class='quantity' onchange='update()'></td>
		<td>${item.price * 1}</td> 
		<td><button  class= 'delete' onclick= 'delElement()'>
		delete</button></td> 
		<td>${item.price}</td>
			</tr>`;
		return tableRow;
}

tableHeading.innerHTML =
		"<tr><th>Product</th><th>Quantity</th><th>Price</th><th>Delete</th><th>Total Price</th></tr>";
	table.prepend(tableHeading);
	
		for (let i = 0; i < items.length; i++) {
			let item = items[i];
			total += parseInt(item.price);
			// console.log(item);
			table.append(createRow(item));

		};

	let tableTotal = document.createElement("tr");
	tableTotal.setAttribute("id", "totalprice");
tableTotal.innerHTML = `<tr> <th colspan="4">Total Amount :</th><td >${total}</td></tr>`;
table.append(tableTotal);

let div = document.createElement("div");
div.innerHTML = info();
table.after(div);
let msgBefore = " MINIMUM ORDER VALUE 400/-";
let msgAfter = "Checkout";
	
function info() {
	if (total >= 400) {
		return `<div class="payment-box">
   <p id="payment-info"><input type="checkbox" id="info" value="false">
If you are not satisfied ,you need return request of products within 24 hours.
after that we will not accept request and not return refund.</p>
  <p id="pay-btn"><button class="payment-btn">
   <a href="/BankingInfo/index.html"> CHECKOUT</a>
</button></p>`;
		
	}
		
	return `<div class="payment-box">
   <p id="payment-info"><input type="checkbox" id="info" value="false">
If you are not satisfied ,you need return request of products within 24 hours.
after that we will not accept request and not return refund.</p>
  <p id="pay-btn"><button class="payment-btn">
    MINIMUM ORDER VALUE 400/-
</button></p>`;
		
}
}else {
	let emptyDiv = document.querySelector("#add-items");
	let table = document.querySelector("#table");
	table.style.display = "none";
	emptyDiv.innerHTML = `<p id="icon"> <i class="fa-solid fa-basket-shopping"></i></p>
        <p id="heading">YOUR CART IS EMPTY</p>
        <pre>Before proceed to checkout you must add some products to your shopping cart.
            You will find a lot of interesting products on our "Shop" page.
        </pre>
       <a href="/Spices/home.html"><p id="btn"><button id="return-btn">Return to Shop</button></p></a>`;
}
let i = 0;
total = 0;
let priceInfo = [] || getLocalStorage("priceInfo");

let amount = 0;
function update() {
	let inputs = document.querySelectorAll('input');
	inputs.forEach(input => {
		input.addEventListener("input", () => {
			if (input.value > 0) {
				console.log(input.value);
				input.parentElement.parentElement.children[4].innerText =
					input.value * input.parentElement.parentElement.children[2].innerText;
				priceInfo[i++]= {
					quantity: input.value,
					totalprice: input.parentElement.parentElement.children[4].innerText
				};
				total = parseInt(input.parentElement.parentElement.children[4].innerText); 
			let curr = parseInt(
				document.querySelector("#totalprice").children[1].innerText
			);
				console.log(total, curr);
				let val = curr+ total - parseInt(input.parentElement.parentElement.children[2].innerText);
				document.querySelector(
					"#totalprice"
				).children[1].innerText = `${val}`;
	
			} else {
				alert("do you want to delete");
				input.value++;
				return;
			}
		});
		
	});
}

// console.log(items);
// get from localStorag
function getLocalStorage(key) {
	return JSON.parse(localStorage.getItem(key));
}

// set from localStorage
function addLocalStorage(key) {
	if (typeof key != "string") {
		key = JSON.stringify(key);
	}
	return key;
}
// 

const cart = getLocalStorage("cart") || [];

function delElement() {
	let removeBtns = document.querySelectorAll('.delete');
	removeBtns.forEach((btn) => {
		btn.addEventListener("click", () => {
let curr = parseInt(
	document.querySelector("#totalprice").children[1].innerText
);
console.log(curr,btn.parentElement.parentElement.children[2].innerText );
let val =curr- parseInt(btn.parentElement.parentElement.children[2].innerText);
			btn.parentElement.parentElement.children[4].innerText =
					btn.parentElement.parentElement.children[1].value * btn.parentElement.parentElement.children[2].innerText;
			total =total- parseInt(
				btn.parentElement.parentElement.children[2].innerText
			);
			// console.log(total)
			document.querySelector("#totalprice").children[1].innerText = curr;
		
			let newCart = cart.filter((item) => {
				return (
					item.name !=
					btn.parentElement.parentElement.children[0].children[0].children[1]
						.innerText
				);
			});

			console.log(newCart);
			btn.parentElement.parentElement.remove();
			localStorage.setItem("cart",JSON.stringify(newCart));
localStorage.setItem("size", JSON.stringify(newCart.length));
		});
	})
}
