// 1. Function Declaration з числовим типом даних
function calculateNumber(num) {
    if (num > 0) {
        return `${num} є додатнім числом`;
    } else if (num < 0) {
        return `${num} є від'ємним числом`;
    } else {
        return "Це нуль";
    }
}

// 2. Function Expression зі строковим типом даних
const greetUser = function(name) {
    switch(name.toLowerCase()) {
        case "іван":
            return "Привіт, Іване!";
        case "марія":
            return "Вітаю, Маріє!";
        default:
            return `Здрастуй, ${name}!`;
    }
};

// 3. Arrow Function з масивом
const checkArray = (arr) => {
    if (arr.length === 0) {
        return "Масив порожній";
    } else {
        return `Довжина масиву: ${arr.length}, перший елемент: ${arr[0]}`;
    }
};

// 4. Function Declaration з булевим типом
function checkStatus(isActive) {
    switch(isActive) {
        case true:
            return "Статус активний";
        case false:
            return "Статус неактивний";
        default:
            return "Невідомий статус";
    }
}

// 5. Arrow Function з об'єктом
const getObjectInfo = (obj) => {
    if (Object.keys(obj).length === 0) {
        return "Об'єкт порожній";
    } else {
        return `Об'єкт має ${Object.keys(obj).length} властивостей`;
    }
}

// Класи Animal -> Dog та Cat
class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    speak() {
        return `${this.name} видає звук!`;
    }
}

class Dog extends Animal {
    constructor(name, age, breed) {
        super(name, age);
        this.breed = breed;
    }

    bark() {
        return `${this.name} гавкає: Гав-гав!`;
    }
}

class Cat extends Animal {
    constructor(name, age, color) {
        super(name, age);
        this.color = color;
    }

    meow() {
        return `${this.name} нявкає: Мяу-мяу!`;
    }
}

// Приклад використання:
console.log(calculateNumber(5));
console.log(greetUser("Іван"));
console.log(checkArray([1, 2, 3]));
console.log(checkStatus(true));
console.log(getObjectInfo({a: 1, b: 2}));

const dog = new Dog("Рекс", 3, "Лабрадор");
console.log(dog.bark());

const cat = new Cat("Мурка", 2, "Сірий");
console.log(cat.meow());
