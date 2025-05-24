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
var Character = /** @class */ (function () {
    function Character(hunger, health) {
        Character.characterCount += 1;
        console.log("I'm the ".concat(Character.characterCount, " characters created."));
        this.hunger = hunger * 2;
        this.health = health;
    }
    Character.prototype.setHunger = function (hunger) {
        this.hunger = hunger;
    };
    Character.prototype.setHealth = function (health) {
        this.health = health;
    };
    Character.prototype.getHunger = function () {
        return this.hunger;
    };
    Character.prototype.getHealth = function () {
        return this.health;
    };
    Character.characterCount = 0;
    return Character;
}());
//const jeff = new Character(100, 100);
//console.log(jeff.getHunger());
//console.log(jeff.getHealth())
var Hero = /** @class */ (function (_super) {
    __extends(Hero, _super);
    function Hero(heroId, hunger, health) {
        var _this = _super.call(this, hunger, health) || this;
        _this.heroId = heroId;
        return _this;
    }
    Hero.prototype.setHeroId = function (heroId) {
        this.heroId = heroId;
    };
    Hero.prototype.getHeroId = function () {
        return this.heroId;
    };
    return Hero;
}(Character));
var jeff = new Hero(123, 100, 100);
var jeff2 = new Hero(123, 100, 100);
var jeff3 = new Hero(123, 100, 100);
var jeff4 = new Hero(123, 100, 100);
var jeff5 = new Hero(123, 100, 100);
var jeff6 = new Hero(123, 100, 100);
//const jeff = new Hero()
//jeff.setHeroId(123);
//jeff.setHunger(100);
//jeff.setHealth(100);
/*
class Hero {
  hunger: number;
  health: number;

  constructor(hunger: number, health: number) {
    this.hunger = hunger
    this.health = health
  }
}

const jeff = new Hero(100, 100);
console.log(jeff.health);
console.log(jeff.hunger);
*/ 
