let arrayLength = prompt("What is the length of the array?")
	arr = [];

for (let i = 0; i < arrayLength; i++) {
	arr.push(parseInt(prompt("Enter array item")));
}

console.log(arr)

let sortedArray = arr.sort((a, b) => {return a - b});

console.log(sortedArray);

let splicedArray = sortedArray.splice(2, 3);

console.log(sortedArray);