
let btn = document.querySelector("#btn");
let img = document.querySelector(".img");
let pname = document.querySelector("#item-name");
let price = document.querySelector("#price");
let about = document.querySelector("#about-item");
let weight = document.querySelector("#weight");
let available = document.querySelector("#avaliability");
let category = document.querySelector("#categories");
let description = document.querySelector("#descriptions");

// get from localStorage
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


let objs = getLocalStorage("products");
console.log(objs)
let itemName= localStorage.getItem("curr");
console.log(objs, itemName);

let item;
for (let i = 0; i < objs.length; i++){
	let product = objs[i];
	if (product.name == itemName) {
		item = product;
	}
}


console.log("curr:", item);
img.innerHTML = item["img"];
pname.innerText = item["name"];
price.innerText = item["price"];
about.innerText = item["about"];
weight.innerText = item["weight"];
available.innerText = item["available"];
description.innerText = item["decs"];
category.innerText = item["category"];


// sizing of product
let min = document.querySelector("#min");
let max = document.querySelector("#max");
let val = document.querySelector("#val");
let quantity = document.querySelector("#item-quantity");

max.addEventListener("click", () => {
	
	let value = parseInt(val.innerText);
	if (value >= 0 && value < 5) {
		value += 1;
		val.innerText = value;
	
	} else if(value ==5) {
		val.innerText = value;
	}
	localStorage.setItem("quantity", addLocalStorage(value));
});


min.addEventListener("click", () => {
	let value = parseInt(val.innerText);

	if (value > 0) {
		val.innerText -= 1;
	} else {
		val.innerText = 0;
	}
localStorage.setItem("quantity", addLocalStorage(val.innerText));

});

// like products
let like = document.querySelector("#item-like");
let heart = document.querySelector(".fa-heart");
let counts = 0;
like.addEventListener("click", () => {
	if (counts == 0 ) {
		counts = counts + 1;
		like.innerHTML= "<i class='fa-solid fa-heart'></i>";
		localStorage.setItem("likes", addLocalStorage(counts));
	} else if(counts==1){
		counts = counts - 1;
		like.innerHTML = "<i class='fa-regular fa-heart'></i>";
		localStorage.setItem("likes", addLocalStorage(counts));
	}
});

console.log(quantity);


// go to next means add to card
let cardBtn = document.querySelector("#btn");
console.log(cardBtn);

cardBtn.addEventListener("click", () => {
	cardBtn.innerHTML= "<a href='/ShoppingCard/index.html'><button id='btn'>ADD TO CART </button></a>"
})



