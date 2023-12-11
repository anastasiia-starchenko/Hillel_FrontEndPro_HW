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
        if (this.toppings.length != 0) {
            this.toppings.forEach((topping) => {toppingsCalories += topping.calories})
        }
        return SIZES[this.size].calories + NACHINKI[this.nachinka].calories + toppingsCalories;
    }
    calculatePrice () {
        let toppingsPrice = 0;
        if (this.toppings.length != 0) {
            this.toppings.forEach((topping) => {toppingsPrice += topping.price})
        }
        return SIZES[this.size].price + NACHINKI[this.nachinka].price + toppingsPrice;
    }
}

let hamburger = new Hamburger("small", "cheese");
hamburger.addTopping("mayo");
console.log("Calories: " + hamburger.calculateCalories());
console.log("Price: " + hamburger.calculatePrice());
hamburger.addTopping("sauce");
console.log("Price with sauce: " + hamburger.calculatePrice());

