// 1 завдання
let name = "Ruslan";
let surname = "Savchyn";
let age = "nineteen";
let city = "Lviv";
let hobbies = "reading, gaming, coding";
// 2 завдання
[name, surname, age, city, hobbies].join(" ");
let person = {
  introduce: function () {
    return `My name is ${name} ${surname}. I am ${age} years old. I live in ${city}. My hobbies are ${hobbies}.`;
  },
}
// 3 завдання
console.log(name.toUpperCase());
console.log(surname.toLowerCase());
// 4 завдання
let greeting = "Hello, my name is Ruslan";
let newGreeting = greeting.replace("Ruslan", "Dimon");
console.log(newGreeting);
let namewithspace = " Ruslan ";
let trimmedName = namewithspace.trim();
console.log(trimmedName);
let message = "I have 1 cat and 2 dogs";
let numbers = message.match(/\d+/g);
console.log(numbers);
// 5 завдання
let names = ["Ruslan", "Dimon", "Vova"];
names.sort((a, b) => a.localeCompare(b));
console.log(names);
// 6 завдання
let phrase = "Orest Bogdanovich the best!";
let result = phrase.includes("Orest");
console.log(result);
let notFound = phrase.includes("Vova loh");
console.log(notFound);
// 7 завдання
let users = [
  { name: "Ruslan", age: 19 },
  { name: "Dimon", age: 20 },
  { name: "Vova", age: 18 },
]
function welcomeUsers(users) {
  return users.map(user => `Welcome ${user.name}, you are ${user.age} years old!`);
}
console.log(welcomeUsers(users));
// 8 завдання
let isPalindrome = function (word){
  let reversedWord = word.split("").reverse().join("");
  return word === reversedWord;
} 
console.log(isPalindrome("level"));
console.log(isPalindrome("hello"));
