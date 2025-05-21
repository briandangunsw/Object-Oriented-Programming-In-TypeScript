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

class Animal {
  private coordX: number;
  private coordY: number;

  makeNoise() {
    console.log("Make noise");
  }

  move() {
    console.log(`I'm moving from coord (${this.coordX}, ${this.coordY})`);
  }

  setCoordX(x: number) {
    this.coordX = x;
  }

  setCoordY(y: number) {
    this.coordY = y;
  }
}

class Dog extends Animal {
  makeNoise() {
    console.log("Bark bark bark");
  }

  move() {
      console.log('getting up on all four paws...');

      super.move() // i'm moving from coord(_,_)
    }
}

const dog = new Dog();
dog.makeNoise(); // Bark bark bark
dog.setCoordX(54);
dog.setCoordY(48);
dog.move();