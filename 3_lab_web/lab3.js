// 1. Створення 10 змінних з різними типами даних
let numberVar = 42;                  // Число (Number)
let stringVar = "Hello, World!";     // Рядок (String)
let booleanVar = true;              // Булевий тип (Boolean)
let nullVar = null;                 // Null
let undefinedVar = undefined;       // Undefined
let bigIntVar = 12345678901234567890n; // BigInt
let symbolVar = Symbol("id");       // Symbol
let objectVar = {name: "John", age: 30}; // Об'єкт (Object)
let arrayVar = [1, 2, 3, 4, 5];     // Масив (Array)
let functionVar = function() {return "I'm a function";}; // Функція (Function)

/*
  2. Перевірка типів даних за допомогою оператора typeof
  та виведення результатів у консоль
*/
console.log(typeof numberVar);      // "number"
console.log(typeof stringVar);      // "string"
console.log(typeof booleanVar);     // "boolean"
console.log(typeof nullVar);       // "object" (особливість JS)
console.log(typeof undefinedVar);   // "undefined"
console.log(typeof bigIntVar);      // "bigint"
console.log(typeof symbolVar);      // "symbol"
console.log(typeof objectVar);      // "object"
console.log(typeof arrayVar);       // "object" (масиви в JS є об'єктами)
console.log(typeof functionVar);    // "function"

// 4. Оператори присвоєння для математичних операцій
let a = 10;
a += 5;    // Додавання: a = a + 5
console.log("a += 5:", a);        // 15

let b = 20;
b -= 8;    // Віднімання: b = b - 8
console.log("b -= 8:", b);        // 12

let c = 4;
c *= 3;    // Множення: c = c * 3
console.log("c *= 3:", c);        // 12

let d = 15;
d /= 3;    // Ділення: d = d / 3
console.log("d /= 3:", d);        // 5

// 5. Логічні оператори
let x = 6;
let y = 3;
console.log("x > 0 && y > 0:", x > 0 && y > 0);    // true (І)
console.log("x > 10 || y > 2:", x > 10 || y > 2);  // true (АБО)
console.log("!booleanVar:", !booleanVar);          // false (НЕ)

// Побітові оператори
let p = 5;    // 0101 в двійковій системі
let q = 3;    // 0011 в двійковій системі
console.log("p & q:", p & q);     // 1 (0101 & 0011 = 0001)
console.log("p | q:", p | q);     // 7 (0101 | 0011 = 0111)
console.log("p ^ q:", p ^ q);     // 6 (0101 ^ 0011 = 0110)
console.log("~p:", ~p);           // -6 (інверсія бітів)
console.log("p << 1:", p << 1);   // 10 (зсув вліво)