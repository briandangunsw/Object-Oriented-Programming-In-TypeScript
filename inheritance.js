/*
class Animal {
  hunger: number
  health: number
  protected coordX: number
  protected coordY: number

  setCoordX(x: number) {
    this.coordX = x;
  }

  setCoordY(y: number) {
    this.coordY = y;
  }
  eat() {
    console.log("I'm eating.");
  }
  sleep() {
    console.log("I'm sleeping.");
  }
  move() {
    console.log("I'm moving");
  }
  makeNoise() {
    console.log("Make noise.")
  }
}
*/
/*
// Dog IS-A Animal
class Dog extends Animal {
  owner: string // Dog HAS-A owner

  makeNoise() {
    console.log("Bark");
  }

  returnToOwner() {
    console.log(
      `I'm at (${this.coordX}, ${this.coordY}), and now I'm returning to owner`
    );
  }
}
class Cat extends Animal {}

const dog = new Dog();
dog.setCoordX(10)
dog.setCoordY(12)
const cat = new Cat();

dog.makeNoise();
cat.makeNoise();
dog.returnToOwner()
*/
/*
class Canine extends Animal {
  makeNoise() {
    console.log("Bark bark bark.");
  }
}

class Dog extends Canine {
  owner: string

  returnToOwner() {
    console.log(`Returning to ${this.owner}`)
  }
}

class Wolf extends Canine {

}

const dog = new Dog()
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.makeNoise = function () {
        console.log("Make noise");
    };
    Animal.prototype.move = function () {
        console.log("I'm moving from coord (".concat(this.coordX, ", ").concat(this.coordY, ")"));
    };
    Animal.prototype.setCoordX = function (x) {
        this.coordX = x;
    };
    Animal.prototype.setCoordY = function (y) {
        this.coordY = y;
    };
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog.prototype.makeNoise = function () {
        console.log("Bark bark bark");
    };
    Dog.prototype.move = function () {
        console.log('getting up on all four paws...');
        _super.prototype.move.call(this); // i'm moving from coord(_,_)
    };
    return Dog;
}(Animal));
var dog = new Dog();
dog.makeNoise(); // Bark bark bark
dog.setCoordX(54);
dog.setCoordY(48);
dog.move();
