/*
Мережа фастфудів пропонує кілька видів гамбургерів:
маленький (50 тугриків, 20 калорій);
великий (100 тугриків, 40 калорій).

Гамбургер може бути з одним із декількох видів начинок:
сиром (+ 10 тугриків, + 20 калорій);
салатом (+ 20 тугриків, + 5 калорій);
картоплею (+ 15 тугриків, + 10 калорій).

Можна додати добавки:
посипати приправою (+15 тугриків, 0 калорій)
полити майонезом (+ 20 тугриків, +5 калорій).

Напишіть програму, яка розраховує вартість та калорійність гамбургера. Використовуйте ООП підхід.

(підказка: потрібен клас Гамбургер, константи, методи для вибору опцій та розрахунку потрібних величин)
*/

const SIZES = {
    small: {
        price: 50,
        calories: 20
    },
    big: {
        price: 100,
        calories: 40
    }
}

const NACHINKI = {
    cheese: {
        price: 10,
        calories: 20
    },
    salad: {
        price: 20,
        calories: 5
    },
    potato: {
        price: 15,
        calories: 10
    }
}

const DOBAVKI = {
    sauce: {
        price: 15,
        calories: 0
    },
    mayo: {
        price: 20,
        calories: 5
    }
}

class Hamburger {
    constructor(size, nachinka) {
        this.size = size;
        this.nachinka = nachinka;
        this.toppings = []
    }
    addTopping (topping) {
        this.toppings.push(DOBAVKI[topping])
    }
    calculateCalories () {
        let toppingsCalories = 0;
        this.toppings.length != 0 ? this.toppings.forEach((topping) => {toppingsCalories += topping.calories}) : null;
        return SIZES[this.size].calories + NACHINKI[this.nachinka].calories + toppingsCalories;
    }
    calculatePrice () {
        let toppingsPrice = 0;
        this.toppings.length != 0 ? this.toppings.forEach((topping) => {toppingsPrice += topping.price}) : null;
        return SIZES[this.size].price + NACHINKI[this.nachinka].price + toppingsPrice;
    }
}

let hamburger = new Hamburger("small", "cheese");
hamburger.addTopping("mayo");
console.log("Calories: " + hamburger.calculateCalories());
console.log("Price: " + hamburger.calculatePrice());
hamburger.addTopping("sauce");
console.log("Price with sauce: " + hamburger.calculatePrice());



/////////////////////////////////////
/*
class Hamburger {
    constructor(size, stuffing) {
        this.size = size;
        this.stuffing = stuffing;
        this.toppings = []
    }
    static SIZE_SMALL = {
        price: 50,
        calories: 20
    }
    static SIZE_BIG = {
        price: 100,
        calories: 40
    }
    static STUFFING_CHEESE = {
        price: 10,
        calories: 20
    }
    static STUFFING_SALAD = {
        price: 20,
        calories: 5
    }
    static STUFFING_POTATO = {
        price: 15,
        calories: 10
    }  
    static TOPPING_MAYO = {
        price: 20,
        calories: 5
    }
    static TOPPING_SAUCE = {
        price: 15,
        calories: 0
    }  
    addTopping (topping) {
        this.toppings.push(topping)
    }
    calculate () {
        let toppingsCalories = 0;
        this.toppings.length != 0 ? this.toppings.forEach((topping) => {toppingsCalories += topping.calories}) : null;        
        return this.size.calories + this.stuffing.calories + toppingsCalories;
    }
    calculatePrice () {
        let toppingsPrice = 0;
        this.toppings.length != 0 ? this.toppings.forEach((topping) => {toppingsPrice += topping.price}) : null;
        return this.size.price + this.stuffing.price + toppingsPrice;
    }
}*/



// маленький гамбургер з начинкою з сиру
//var hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);

// добавка з майонезу
//hamburger.addTopping(Hamburger.TOPPING_MAYO);

// запитаємо скільки там калорій
//console.log("Calories: " + hamburger.calculate());

// скільки коштує
//console.log("Price: " + hamburger.calculatePrice());

// я тут передумав і вирішив додати ще приправу
//hamburger.addTopping(Hamburger.TOPPING_SAUCE);

// А скільки тепер коштує?
//console.log("Price with sauce: " + hamburger.calculatePrice());

//console.log(hamburger)