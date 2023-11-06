let sum = 0, number, amountOfNumbers = 3;
for (let i = 1; i <= amountOfNumbers; i++) {
	do {
	    number = parseInt(prompt("Enter " + i + " number"));
	} while (isNaN(number));
	sum += number;
}
alert(`Average: ${sum/amountOfNumbers}`);
