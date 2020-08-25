function add (num1,num2) {
	return num1 +num2;
}

function subtract (num1,num2) {
	return num1 -num2
}

function sum (numbers) {
	let total = numbers.reduce((a,b)=> a + b,0);
	return total;
	
}

function multiply (numbers) {
	return numbers.reduce((a,b) => a * b);
}

function power(num1, num2) {
	return num1**num2;
}

function factorial(num) {
	if (num === 0 || num === 1) {
		return 1;
	}
	let value = 1;
	
		for (let i =1; i <= num; i++){
			value *= i;
		}
		
	return value
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}