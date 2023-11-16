/*Створити масив, довжину та елементи якого задає користувач.
Відсортувати масив за зростанням.
Видалити елементи з масиву з 2 по 4 (включно!).
У міру змін виводити вміст масиву на сторінку.*/

let arrayLength = prompt("What is the length of the array?")
	arr = [];

for (let i = 0; i < arrayLength; i++) {
	arr.push(parseInt(prompt("Enter array item")));
}

console.log(arr)

let sortedArray = arr.sort((a, b) => {return a - b});

console.log(sortedArray);

let splicedArray = sortedArray.splice(1, 3);

console.log(sortedArray);