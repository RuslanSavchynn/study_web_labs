// Завдання 1: Створити 5 масивів з різними типами даних
let numbers = [1, 2, 3, 4, 5];                    // Числа
let strings = ["I", "love", "to", "code"];       // Рядки
let booleans = [true, false, true, false];       // Булеві значення
let mixed = [10, "test", true, null];            // Змішані типи
let users = [{name: "Орест Богданович"}, {name: "ТЦК"}, {name: "Янукович"}]; // Об'єкти

console.log("Завдання 1 - Масиви:");
console.log("numbers:", numbers);
console.log("strings:", strings);
console.log("booleans:", booleans);
console.log("mixed:", mixed);
console.log("users:", users);

// Завдання 2: Використати цикл for
console.log("\nЗавдання 2 - Цикл for:");
for (let i = 0; i < numbers.length; i++) {
    console.log(`Елемент ${i}: ${numbers[i]}`);
}

// Завдання 3: Використати цикл while
console.log("\nЗавдання 3 - Цикл while:");
let j = 0;
while (j < strings.length) {
    console.log(`Слово ${j}: ${strings[j]}`);
    j++;
}

// Завдання 4: Використати цикл do…while
console.log("\nЗавдання 4 - Цикл do…while:");
let k = 0;
do {
    console.log(`Значення ${k}: ${booleans[k]}`);
    k++;
} while (k < booleans.length);

// Завдання 5: Функція sum для суми чисел у масиві
function sum(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
}

console.log("\nЗавдання 5 - Функція sum:");
console.log("Сума чисел у numbers:", sum(numbers));

// Завдання 6: Функція getSentence для створення речення
function getSentence(arr) {
    let sentence = "";
    let i = 0;
    while (i < arr.length) {
        sentence += arr[i] + (i < arr.length - 1 ? " " : "");
        i++;
    }
    return sentence;
}

console.log("\nЗавдання 6 - Функція getSentence:");
console.log("Речення:", getSentence(strings));

// Завдання 7: Функція sumNumArrays для суми двох масивів
function sumNumArrays(arr1, arr2) {
    let sum = 0;
    let i = 0;
    do {
        if (i < arr1.length) sum += arr1[i];
        if (i < arr2.length) sum += arr2[i];
        i++;
    } while (i < arr1.length || i < arr2.length);
    return sum;
}

let numbers2 = [6, 7, 8];
console.log("\nЗавдання 7 - Функція sumNumArrays:");
console.log("Сума чисел у numbers і numbers2:", sumNumArrays(numbers, numbers2));

// Завдання 8: Функція welcomeUsers для привітань
function welcomeUsers(usersArr) {
    let greetings = [];
    for (let i = 0; i < usersArr.length; i++) {
        greetings.push(`Привіт, ${usersArr[i].name}!`);
    }
    return greetings;
}

console.log("\nЗавдання 8 - Функція welcomeUsers:");
console.log("Привітання:", welcomeUsers(users));
