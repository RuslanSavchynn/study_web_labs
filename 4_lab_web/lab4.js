// 1. Створення 5 об’єктів з різними типами даних
let user = {
    name: "Олександр",          // string
    age: 25,                   // number
    isStudent: true            // boolean
};

let car = {
    brand: "Toyota",          // string
    year: 2020,              // number
    features: ["ABS", "GPS"] // array
};

let product = {
    id: 1,                   // number
    price: 599.99,          // number (float)
    inStock: true           // boolean
};

let settings = {
    theme: "dark",         // string
    notifications: true,   // boolean
    volume: 75            // number
};

let data = {
    timestamp: new Date(), // object (Date)
    status: "active",     // string
    count: 10            // number
};

// 2. Додавання нових та зміна існуючих значень
user.city = "Київ";          // Додаємо нове значення
user.age = 26;              // Змінюємо існуюче значення

car.features.push("Bluetooth"); // Додаємо в масив
car.color = "blue";            // Додаємо нову властивість

// 3. Використання if…else для зміни
if (product.price > 500) {
    product.discount = 10;     // Додаємо знижку, якщо ціна > 500
} else {
    product.discount = 0;
}

if (settings.volume >= 50) {
    settings.loud = true;
} else {
    settings.loud = false;
}

// 4. Використання switch…case для виведення дня тижня
let dayNumber = new Date().getDay();
let dayName;

switch (dayNumber) {
    case 0:
        dayName = "Неділя";
        break;
    case 1:
        dayName = "Понеділок";
        break;
    case 2:
        dayName = "Вівторок";
        break;
    case 3:
        dayName = "Середа";
        break;
    case 4:
        dayName = "Четвер";
        break;
    case 5:
        dayName = "П’ятниця";
        break;
    case 6:
        dayName = "Субота";
        break;
    default:
        dayName = "Невідомий день";
}

// 5. Використання методів для роботи з об’єктами
// Object.assign()
let newUser = Object.assign({}, user, {role: "developer"});
console.log("Новий об’єкт з assign:", newUser);

// Object.freeze()
Object.freeze(product);
product.price = 100; // Не спрацює, бо об’єкт заморожений
console.log("Заморожений продукт:", product);

// Object.keys()
let userKeys = Object.keys(user);
console.log("Ключі об’єкта user:", userKeys);

// Object.entries()
let settingsEntries = Object.entries(settings);
console.log("Пари ключ-значення settings:", settingsEntries);

// Виведення результатів
console.log("Оновлений user:", user);
console.log("Оновлений car:", car);
console.log("Продукт з умовою:", product);
console.log("Налаштування з умовою:", settings);
console.log("День тижня:", dayName);
