/*
Створити функцію генератор, яка створює id у вигляді 'id_number'. Де замість number буде число від 0.

Наприклад, перший виклик створить 'id0', другий 'id1', третій 'id2' і тд
*/

function* idGenerator () {
    let start = 0;
    while(true) {yield "id" + start++};
}

let generateId = idGenerator();

console.log(generateId.next());
console.log(generateId.next());
console.log(generateId.next());
console.log(generateId.next());
console.log(generateId.next());
console.log(generateId.next());
