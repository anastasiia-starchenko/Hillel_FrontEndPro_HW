// Вивести на сторінку в один рядок через кому числа від 10 до 20.

let result = [];

for (let d = 10; d < 21; d++) {
	result.push(d);
}
console.log(result.join(','))


// Вивести квадрати чисел від 10 до 20.

for (let i = 10; i < 21; i++) {
	console.log(Math.pow(i, 2));
}


// Вивести таблицю множення на 7.

for (let j = 0; j < 11; j++) {
	console.log(j + " * 7 = " + j*7);
}


// Знайти суму всіх цілих чисел від 1 до 15.

let sum = 0;

for (let a = 0; a < 16; a++) {
	 sum += a;
}

console.log(sum);


//Знайти добуток усіх цілих чисел від 15 до 35.

let product = 1;

for (let b = 15; b < 36; b++) {
	 product *= b;
}

console.log(product);


//Знайти середнє арифметичне всіх цілих чисел від 1 до 500.

let sum2 = 0;

for (let c = 1; c < 501; c++) {
	 sum2 += c;
}
let average = sum2/500; 
console.log(average);


//Вивести суму лише парних чисел в діапазоні від 30 до 80.

let sum3 = 0;

for (let e = 30; e < 81; e += 2) {
	 sum3 += e;
}

console.log(sum3)


//Вивести всі числа в діапазоні від 100 до 200 кратні 3.

for (let f = 100; f < 201; f++) {
	f%3 == 0 ? console.log(f) : null;
}


//Дано натуральне число. Знайти та вивести на сторінку всі його дільники.

let naturalNumber = 8;

for (let g = 0; g <= naturalNumber; g++) {
	naturalNumber%g == 0 ? console.log(g) : null;
}


//Визначити кількість його парних дільників.

let numberOfEvenDivisors = 0;
for (let h = 0; h <= naturalNumber; h += 2) {
	naturalNumber%h == 0 ? numberOfEvenDivisors++ : null;
}

console.log(numberOfEvenDivisors);

//Знайти суму його парних дільників.

let sumOfEvenDivisors = 0;
for (let h = 0; h <= naturalNumber; h += 2) {
	naturalNumber%h == 0 ? sumOfEvenDivisors += h : null;
}

console.log(sumOfEvenDivisors);


//Надрукувати повну таблицю множення від 1 до 10.


for (let k = 1; k < 11; k++) {
	for (let l = 1; l < 11; l++) {
		console.log(k + ` * ${l} = ` + k*l);
	}
}
