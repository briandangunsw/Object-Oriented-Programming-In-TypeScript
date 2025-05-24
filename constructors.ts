
class Character {
  static characterCount = 0;
  hunger: number
  health: number

  constructor(hunger: number, health: number) {
    Character.characterCount += 1;
    console.log(`I'm the ${Character.characterCount} characters created.`)
    this.hunger = hunger * 2;
    this.health = health;
  }
  setHunger(hunger: number): void {
    this.hunger = hunger
  }

  setHealth(health: number): void {
    this.health = health;
  }

  getHunger(): number {
    return this.hunger
  }
  getHealth(): number {
    return this.health
  }
}

//const jeff = new Character(100, 100);
//console.log(jeff.getHunger());
//console.log(jeff.getHealth())

class Hero extends Character {
  private heroId: number // readonly heroId: number

  constructor(heroId: number, hunger: number, health: number) {
    super(hunger, health)
    this.heroId = heroId;
  }

  setHeroId(heroId: number): void {
    this.heroId = heroId;
  }

  getHeroId(): number {
    return this.heroId;
  }
}

const jeff = new Hero(123, 100, 100);
const jeff2 = new Hero(123, 100, 100);
const jeff3 = new Hero(123, 100, 100);
const jeff4 = new Hero(123, 100, 100);
const jeff5 = new Hero(123, 100, 100);
const jeff6 = new Hero(123, 100, 100);

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