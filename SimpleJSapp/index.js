let num1 = 8;
let num2 = 2;

document.getElementById("num1").innerText = num1;
document.getElementById("num2").innerText = num2;
let sumEl = document.getElementById("sum-el");

function add() {
	let result = num1 + num2;
	sumEl.textContent = "Sum: " + result;
}

function deduct() {
	let result = num1 - num2;
	sumEl.textContent = "Sum: " + result;
}

function devide() {
	let result = num1 / num2;
	sumEl.innerText = "Sum: " + result;
}

function multiply() {
	let result = num1 * num2;
	sumEl.textContent = "Sum: " + result;
}
