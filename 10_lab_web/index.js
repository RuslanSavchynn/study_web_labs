
class GameCharacter {
  constructor(name, type, level) {
    this.name = name;
    this.type = type;
    this.level = level;
  }

  getName() {
    return this.name;
  }

  setName(name) {
    this.name = name;
  }

  getType() {
    return this.type;
  }

  setType(type) {
    this.type = type;
  }

  getLevel() {
    return this.level;
  }

  setLevel(level) {
    this.level = level;
  }

  move(x, y) {
    console.log(`${this.name} перемістився до координат [${x}, ${y}]`);
  }
}

class Warrior extends GameCharacter {
  constructor(name, level, weapon) {
    super(name, 'Warrior', level);
    this.weapon = weapon;
  }

  attack() {
    console.log(`${this.name} атакує з ${this.weapon}`);
  }
}

class Mage extends GameCharacter {
  constructor(name, level, element) {
    super(name, 'Mage', level);
    this.element = element;
  }

  castSpell() {
    console.log(`${this.name} використовує магію ${this.element}`);
  }
}


function Car(brand, model, year, color) {
  this.brand = brand;
  this.model = model;
  this.year = year;
  this.color = color;
}

Car.prototype.getBrand = function () {
  return this.brand;
};

Car.prototype.getModel = function () {
  return this.model;
};

Car.prototype.getYear = function () {
  return this.year;
};

Car.prototype.getColor = function () {
  return this.color;
};

Car.prototype.setColor = function (color) {
  this.color = color;
};

Car.prototype.move = function (x, y) {
  console.log(`${this.brand} ${this.model} переміщується до [${x}, ${y}]`);
};

function ElectricCar(brand, model, year, color, batteryCapacity) {
  Car.call(this, brand, model, year, color);
  this.batteryCapacity = batteryCapacity;
}

ElectricCar.prototype = Object.create(Car.prototype);
ElectricCar.prototype.constructor = ElectricCar;

ElectricCar.prototype.charge = function () {
  console.log(`${this.brand} заряджається. Ємність акумулятора: ${this.batteryCapacity} кВт·год`);
};

function SportsCar(brand, model, year, color, maxSpeed) {
  Car.call(this, brand, model, year, color);
  this.maxSpeed = maxSpeed;
}

SportsCar.prototype = Object.create(Car.prototype);
SportsCar.prototype.constructor = SportsCar;

SportsCar.prototype.boost = function () {
  console.log(`${this.brand} ${this.model} активує турбо-режим до ${this.maxSpeed} км/год`);
};


const mage = new Mage("Ліна", 5, "вогонь");
const logMageSpell = mage.castSpell.bind(mage);
setTimeout(logMageSpell, 1000);

const warrior = new Warrior("Гром", 7, "меч");
function showInfo(extra) {
  console.log(`${this.name} (${this.type}) рівень ${this.level}. ${extra}`);
}
showInfo.call(warrior, "Готовий до бою!");

const electricCar = new ElectricCar("Tesla", "Model S", 2022, "білий", 100);
function carIntro(city, speed) {
  console.log(`${this.brand} ${this.model} їде до ${city} зі швидкістю ${speed} км/год`);
}
carIntro.apply(electricCar, ["Львів", 120]);

