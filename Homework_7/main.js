/*Написати функцію, яка приймає 1 параметр. з тим, що передали перший раз і т. д. 
Все це із замиканнями, наприклад:
sum(3) = 3 
sum(5) = 8
sum(20) = 28*/
let sum = 0;
function countSum(a) {
	function addParameter () {
		return sum += a;
	}
	return addParameter();
}
console.log(countSum(3))
console.log(countSum(5))
console.log(countSum(20))