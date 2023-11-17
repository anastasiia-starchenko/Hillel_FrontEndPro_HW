/*Дано масив з елементами різних типів. 
Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.*/

const array = [1, "qwerty", true, 55, 22, "qwe"];

let findAverage = (arr) => {
	let filteredArray = arr.filter((el) => typeof el == "number"),
		sum = filteredArray.reduce((acc, el) => acc + el);

	return sum/filteredArray.length;
}

console.log(findAverage(array));

/*Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak. 
У змінній znak може бути: +, -, *, /, %, ^ (ступінь ).
Вивести результат математичної дії, вказаної в змінній znak.Обидва числа і знак виходять від користувача.*/

const OPERATIONS = {
	"+": function(x,y){return x+y},
	"-": function(x,y){return x-y},
	"*": function(x,y){return x*y},
	"/": function(x,y){return x/y},
	"%": function(x,y){return x%y},
	"^": function(x,y){return x^y}
}

let doMath = (x, znak, y) => {
	return OPERATIONS[znak](x, y);
}

let x = parseInt(prompt("Enter x")),
	y = parseInt(prompt("Enter y")),
	znak;

do {
	znak = prompt("Enter symbol");
} while (!Object.keys(OPERATIONS).includes(znak))

console.log(doMath(x, znak, y))

/*Написати функцію заповнення даними користувача двомірного масиву. 
Довжину основного масиву і внутрішніх масивів задає користувач.
 Значення всіх елементів всіх масивів задає користувач.*/

let mainArray = [],
	mainArrayLength = parseInt(prompt("Enter main array length"));
for (let i = 0; i < mainArrayLength; i++) {
	let innerArrayLength = parseInt(prompt("Enter inner array length"))
		innerArray = [];
	for (let j = 0; j < innerArrayLength; j++) {
		let arrayElement = prompt("Enter inner array element");
		innerArray.push(arrayElement);
	}
	mainArray.push(innerArray);
}

console.log(mainArray)

/*Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом.
 'func(" hello world", ['l', 'd'])' поверне нам "heo wor". 
Вихідний рядок та символи для видалення задає користувач.*/

let eliminateSymbolsFromString = (string, symbolsToEliminate) => {
	console.log(string, symbolsToEliminate)
	let newString = "";
	for (let i = 0; i < string.length; i++) {
		!symbolsToEliminate.includes(string[i]) ? newString += string[i] : null;
	}
	return newString;
}

let string = prompt("Enter string"),
	symbolsToEliminate = prompt("Enter symbols to eliminate");


console.log(eliminateSymbolsFromString(string, Array.from(symbolsToEliminate)));
