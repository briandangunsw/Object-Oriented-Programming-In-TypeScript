// interitance
// 1. remove code duplication.
// 2. providing a common protocol for a group of subclasses.


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

class Hero {
  hunger: number
  health: number

  attack() {
    console.log("I'm attacking");
  }

  move() {
    console.log("I'm moving")
  }

  eat() {
    console.log("I'm eating");
  }

}

// A extends B
// A IS-A B
// Archer ISA Hero
class Archer extends Hero {
  arrows: number
  attack() {
    super.attack()
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

class Knight extends Hero {
  shield: number

  attack() {
    super.attack()
    console.log("I'm swinging with a sword")
  }
}

class Wizard extends Mage {}
class Witch extends Mage {}

/*
const archer: Hero = new Archer()
const mage: Hero = new Mage()
const knight: Hero = new Knight()

archer.attack();
mage.attack();
knight.attack();
*/
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