// Лабораторна робота 6: Робота з масивами в JavaScript

// Завдання 1: Створити 5 масивів з різними типами даних
let numbers = [1, 2, 3, 4, 5];                    // Числа
let strings = ["apple", "banana", "orange"];      // Рядки
let booleans = [true, false, true];               // Булеві значення
let mixed = [42, "hello", true, null];            // Змішані типи
let objects = [{id: 1}, {name: "John"}, {age: 25}]; // Об'єкти

console.log("Завдання 1 - Масиви:");
console.log("numbers:", numbers);
console.log("strings:", strings);
console.log("booleans:", booleans);
console.log("mixed:", mixed);
console.log("objects:", objects);

// Завдання 2: Використати методи push() і pop()
console.log("\nЗавдання 2 - push() і pop():");
numbers.push(6); // Додаємо елемент в кінець
console.log("Після push(6):", numbers);
let popped = numbers.pop(); // Видаляємо останній елемент
console.log("Після pop():", numbers, "Видалений елемент:", popped);

// Завдання 3: Використати методи shift() і unshift()
console.log("\nЗавдання 3 - shift() і unshift():");
strings.shift(); // Видаляємо перший елемент
console.log("Після shift():", strings);
strings.unshift("grape"); // Додаємо елемент на початок
console.log("Після unshift('grape'):", strings);

// Завдання 4: Використати метод concat()
console.log("\nЗавдання 4 - concat():");
let combined = numbers.concat(strings); // Об'єднуємо два масиви
console.log("Результат concat(numbers, strings):", combined);

// Завдання 5: Створити функції swap з деструктуризацією та звичайним підходом
console.log("\nЗавдання 5 - Функції swap:");

// Звичайний підхід
function swapRegular(arr, index1, index2) {
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
    return arr;
}

// З деструктуризацією
function swapDestruct(arr, index1, index2) {
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
    return arr;
}

let testArray1 = [1, 2, 3, 4];
let testArray2 = [1, 2, 3, 4];
console.log("Початковий масив:", testArray1);
console.log("swapRegular(0, 2):", swapRegular(testArray1, 0, 2));
console.log("Початковий масив:", testArray2);
console.log("swapDestruct(1, 3):", swapDestruct(testArray2, 1, 3));

// Завдання 6: Створити функції для трансформації масиву
console.log("\nЗавдання 6 - Функції трансформації:");

// Функція 1: Подвоює кожен елемент масиву чисел
function doubleArray(arr) {
    return arr.map(num => num * 2);
}

// Функція 2: Перетворює рядки в масиві на верхній регістр
function toUpperCaseArray(arr) {
    return arr.map(str => str.toUpperCase());
}

// Функція 3: Фільтрує парні числа
function filterEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
}

let numArray = [1, 2, 3, 4, 5];
let strArray = ["cat", "dog", "bird"];
console.log("Початковий числовий масив:", numArray);
console.log("doubleArray:", doubleArray(numArray));
console.log("filterEvenNumbers:", filterEvenNumbers(numArray));
console.log("Початковий рядковий масив:", strArray);
console.log("toUpperCaseArray:", toUpperCaseArray(strArray));
