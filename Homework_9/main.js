/*1. Створити клас Людина.

Властивості:
імʼя;
стать.
Методи:
конструктор, який приймає два параметри: імʼя та стать.

2. Створити клас Квартира.

Властивості:
конструктор не потрібен;
масив жителів, який при створенні пустий.
Методи:
додати жителя - метод повинен приймати екземпляр класу Людина, та додавати до масиву жителів.

3. Створити клас Будинок.

Властивості:
масив квартир, який при створенні пустий;
максимальна кількість квартир.
Методи:
конструктор, який приймає один параметр: максимальну кількість квартир;
додати квартиру - метод повинен приймати екземпляр класу Квартира, перевіряти, чи не буде кількість перевищувати максимальну кількість квартир, і якщо це так, додати квартиру, в іншому випадку виводить у консоль відповідне повідомлення.

В якості демонстраціїї створити:

декілька екземплярів класу Людина;
декілька екземплярів класу Квартира;
додадити екземпляри класу Людина до екземплярів класу Квартира;
екземпляр класу Будинок;
додадити екземпляри класу Квартира до екземплярів класу Будинок.*/



class Person {
    constructor(name, sex) {
        this.name = name;
        this.sex = sex; 
    }
}

class Flat {
    arrOfResidents = [];
    addResident (resident) {
        this.arrOfResidents.push(resident);
    }
}

class House {
    arrOfFlats = [];
    constructor (maxAmountOfFlats) {
        this.maxAmountOfFlats = maxAmountOfFlats;
    }
    addFlats (flat) {
        console.log(this.maxAmountOfFlats, this.arrOfFlats.length)
        this.maxAmountOfFlats <= this.arrOfFlats.length ? console.log("Max amount of flats") : this.arrOfFlats.push(flat);
    }
}

let personNastya = new Person("Nastya", "f");
let personPetro = new Person("Petro", "m");

let NastyasFlat = new Flat();
let PetrosFlat = new Flat();

NastyasFlat.addResident(personNastya);
PetrosFlat.addResident(personPetro);

let NastyasHouse = new House(2);

NastyasHouse.addFlats(NastyasFlat);
NastyasHouse.addFlats(PetrosFlat);
NastyasHouse.addFlats(PetrosFlat);