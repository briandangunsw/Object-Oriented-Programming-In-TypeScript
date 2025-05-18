/*
const name = "Mario"
const speed = 1
const isInvincible = true

const hasFireAbility = true;

export {};
*/
var Player = /** @class */ (function () {
    function Player() {
    }
    Player.prototype.greet = function () {
        console.log("Hello, my name is ".concat(this.name));
    };
    return Player;
}());
var mario = new Player();
mario.name = "Mario";
mario.health = 10;
mario.isInvincible = true;
var peach = new Player();
peach.name = "Peach";
peach.health = 8;
peach.isInvincible = true;
mario.greet();
peach.greet();
