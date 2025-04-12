// Завдання 1: Створити 5 масивів з різними типами даних
let numbers = [1, 5, 3, 4, 2];                    // Числа
let strings = ["cat", "dog", "bird"];            // Рядки
let booleans = [true, false, true, false];       // Булеві значення
let mixed = [10, "test", true, null];            // Змішані типи
let users = [{name: "ТЦК(лохи)"}, {name: "Орест Богданович(найкращий!)"}, {name: "Янукович(база)"}]; // Об'єкти

console.log("Завдання 1 - Масиви:");
console.log("numbers:", numbers);
console.log("strings:", strings);
console.log("booleans:", booleans);
console.log("mixed:", mixed);
console.log("users:", users);

// Завдання 2: Використати метод forEach()
console.log("\nЗавдання 2 - forEach():");
numbers.forEach((num, index) => {
    console.log(`Елемент ${index}: ${num}`);
});

// Завдання 3: Використати метод map()
console.log("\nЗавдання 3 - map():");
let doubled = numbers.map(num => num * 2);
console.log("Подвоєні числа:", doubled);

// Завдання 4: Використати метод filter()
console.log("\nЗавдання 4 - filter():");
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("Парні числа:", evenNumbers);

// Завдання 5: Використати метод reduce()
console.log("\nЗавдання 5 - reduce():");
let sumReduce = numbers.reduce((acc, num) => acc + num, 0);
console.log("Сума чисел:", sumReduce);

// Завдання 6: Використати методи sort(), includes(), join()
console.log("\nЗавдання 6 - sort(), includes(), join():");
let sortedNumbers = numbers.sort((a, b) => a - b);
console.log("Відсортовані числа:", sortedNumbers);
console.log("Чи є 'dog' у strings:", strings.includes("dog"));
let joinedStrings = strings.join(" ");
console.log("Об'єднані рядки:", joinedStrings);

// Завдання 7: Функція sum з використанням map()
function sum(arr) {
    let total = 0;
    arr.map(num => total += num);
    return total;
}

console.log("\nЗавдання 7 - Функція sum з map():");
console.log("Сума чисел у numbers:", sum(numbers));

// Завдання 8: Функція getSentence з використанням reduce()
function getSentence(arr) {
    return arr.reduce((sentence, word) => sentence + " " + word, "").trim();
}

console.log("\nЗавдання 8 - Функція getSentence з reduce():");
console.log("Речення:", getSentence(strings));

// Завдання 9: Функція sumNumArrays
function sumNumArrays(arr1, arr2) {
    return arr1.reduce((acc, num) => acc + num, 0) + arr2.reduce((acc, num) => acc + num, 0);
}

let numbers2 = [6, 7, 8];
console.log("\nЗавдання 9 - Функція sumNumArrays:");
console.log("Сума чисел у numbers і numbers2:", sumNumArrays(numbers, numbers2));

// Завдання 10: Функція welcomeUsers з використанням map()
function welcomeUsers(usersArr) {
    return usersArr.map(user => `Привіт, ${user.name}!`);
}

console.log("\nЗавдання 10 - Функція welcomeUsers з map():");
console.log("Привітання:", welcomeUsers(users));
