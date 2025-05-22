// interitance
// 1. remove code duplication.
// 2. providing a common protocol for a group of subclasses.
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
/*
class Character {
  health: number;

  move() {}
  playVoiceRecording() {

  }
}

class Mario extends Character {
  health: number;

  move() {}
  playVoiceRecording() {

  }
}

class Luigi extends Character {
  health: number;

  move() {};
  playVoiceRecording() {};
}

class Peach extends Character {
  health: number;

  move() {}
  playVoiceRecording() {

  }
}
*/
var Hero = /** @class */ (function () {
    function Hero() {
    }
    Hero.prototype.move = function () {
        console.log("I'm moving");
    };
    /*
    attack() {
      console.log("I'm attacking");
    }
    */
    /*
    move() {
      console.log("I'm moving")
    }
    */
    Hero.prototype.eat = function () {
        console.log("I'm eating");
    };
    return Hero;
}());
var Mage = /** @class */ (function (_super) {
    __extends(Mage, _super);
    function Mage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Mage;
}(Hero));
var Wizard = /** @class */ (function (_super) {
    __extends(Wizard, _super);
    function Wizard() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Wizard.prototype.attack = function () {
        this.mana -= 1;
        console.log("Wizard attacks");
    };
    return Wizard;
}(Mage));
var Witch = /** @class */ (function (_super) {
    __extends(Witch, _super);
    function Witch() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Witch.prototype.attack = function () {
        this.mana -= 1;
        console.log("Witch attacks");
    };
    return Witch;
}(Mage));
var wizard = new Wizard();
var witch = new Witch();
wizard.attack();
witch.attack();
/*
// A extends B
// A IS-A B
// Archer ISA Hero
class Archer extends Hero {
  arrows: number
  attack() {
    //super.attack()
    console.log("Firing an arrow")
    this.arrows -= 1
  }
}
class Mage extends Hero {
  mana: number

  attack() {
    super.attack();
    console.log("Throwing a potion");
    this.mana -= 1
  }
}

class Knight extends Hero { // concrete class
  shield: number

  attack() {
    //super.attack()
    console.log("I'm swinging with a sword")
  }
}

const archer: Archer = new Archer()
const knight: Knight = new Knight()

const heros: Hero[] = [archer, knight]

for (let hero of heros) {
  hero.attack();
}
//const bob: Hero = new Hero();


/*
class Wizard extends Mage {}
class Witch extends Mage {}

/*
const archer: Hero = new Archer()
const mage: Hero = new Mage()
const knight: Hero = new Knight()

archer.attack();
mage.attack();
knight.attack();

class Tribe {
  private heros: Hero[]

  setHeros(heros: Hero[]) {
    this.heros = heros
  }

  attack(): void {
    for (let hero of this.heros) {
      hero.attack();
    }
  }
}

const archer: Hero = new Archer()
const mage: Hero = new Mage()
const knight: Hero = new Knight()
//const wizard: Wizard = new Wizard();
//const wizard: Mage = new Wizard();
const wizard: Hero = new Wizard();

const heros: Hero[] = [archer, mage, knight]
const tribe = new Tribe()
tribe.setHeros(heros)

tribe.attack();

// new ask: thieves

class Theif extends Hero {
  attack() {
    super.attack();
    console.log("Pick pocket");
  }
}

const thief = new Theif()
const heros2: Hero[] = [knight, thief, mage];
const tribe2 = new Tribe()
tribe2.setHeros(heros2)
*/ 
