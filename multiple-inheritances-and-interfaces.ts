/*
abstract class Character {
  hunger: number;
  health: number;

  abstract eat(): void
}

interface Hero extends Character {
  heroId: number
}

interface Enemy extends Character {
  enemyId: number
}

// Spy IS-A Hero, Spy IS-A Enemy
class Spy implements Hero, Enemy {
  hunger: number;
  health: number;
  heroId: number;
  enemyId: number;

  eat() {
    this.hunger -= 1;
  }
}

const hero: Hero = new Spy()
const enemy: Enemy = new Spy()


// 1. basic classes
// 2. subclasses
// 3. abstract classes
// 4. interfaces

// IS-A
class Character {}

interface Hero {}
interface Enemy {}
class Spy implements Hero, Enemy {}

class Knight implements Hero{}
class Archer implements Hero{}

abstract class Mage implements Hero {}

class Wizard extends Mage {}
class Witch extends Mage {}

*/