class Player {
  private health: number
  private speed: number

  setHealth(health: number) {
    if (health < 0) {
      console.log("You can't set the health below 0");
      return;
    }
    this.health = health
  }

  getHealth() {
    return this.health;
  }

  setSpeed(speed: number) {
    this.speed = speed;
  }

  getSpeed() {
    return this.speed;
  }
}

const mario = new Player();
mario.setHealth(-3)
mario.setHealth(8);
mario.setSpeed(1)

console.log(`Mario has ${mario.getHealth()}/10 health.`);
console.log(`Mario has ${mario.getSpeed()}/10 speed.`);