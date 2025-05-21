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
    Hero.prototype.attack = function () {
        console.log("I'm attacking");
    };
    Hero.prototype.move = function () {
        console.log("I'm moving");
    };
    Hero.prototype.eat = function () {
        console.log("I'm eating");
    };
    return Hero;
}());
var Archer = /** @class */ (function (_super) {
    __extends(Archer, _super);
    function Archer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Archer.prototype.attack = function () {
        _super.prototype.attack.call(this);
        console.log("Firing an arrow");
        this.arrows -= 1;
    };
    return Archer;
}(Hero));
var Mage = /** @class */ (function (_super) {
    __extends(Mage, _super);
    function Mage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Mage.prototype.attack = function () {
        _super.prototype.attack.call(this);
        console.log("Throwing a potion");
        this.mana -= 1;
    };
    return Mage;
}(Hero));
var Knight = /** @class */ (function (_super) {
    __extends(Knight, _super);
    function Knight() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Knight.prototype.attack = function () {
        _super.prototype.attack.call(this);
        console.log("I'm swinging with a sword");
    };
    return Knight;
}(Hero));
/*
const archer: Hero = new Archer()
const mage: Hero = new Mage()
const knight: Hero = new Knight()

archer.attack();
mage.attack();
knight.attack();
*/
var Tribe = /** @class */ (function () {
    function Tribe() {
    }
    Tribe.prototype.setHeros = function (heros) {
        this.heros = heros;
    };
    Tribe.prototype.attack = function () {
        for (var _i = 0, _a = this.heros; _i < _a.length; _i++) {
            var hero = _a[_i];
            hero.attack();
        }
    };
    return Tribe;
}());
var archer = new Archer();
var mage = new Mage();
var knight = new Knight();
var heros = [archer, mage, knight];
var tribe = new Tribe();
tribe.setHeros(heros);
tribe.attack();
