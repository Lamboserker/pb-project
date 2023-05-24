// AttackSkill class
class AttackSkill {
    constructor(name, damage, magicCost) {
      this.name = name;
      this.damage = damage;
      this.magicCost = magicCost;
    }
  }
  
  // Pokemon class
  class Pokemon {
    constructor(name, health, magic) {
      this.name = name;
      this.health = health;
      this.magic = magic;
      this.skills = [];
    }
  
    learnAttackSkill(attackSkill) {
      this.skills.push(attackSkill);
    }
  
    showStatus() {
      console.log(`Status of ${this.name}:`);
      console.log(`Health: ${this.health}`);
      console.log(`Magic: ${this.magic}`);
      console.log("-------------------");
    }
  
    attack(skillIndex, targetPokemon) {
      const attackSkill = this.skills[skillIndex];
  
      if (!attackSkill) {
        console.log(`${this.name} doesn't have an attack with index ${skillIndex}!`);
        console.log("-------------------");
        return;
      }
  
      if (this.magic < attackSkill.magicCost) {
        console.log(`Not enough magic, ${this.name} cannot perform the attack!`);
        console.log("-------------------");
        return;
      }
  
      console.log(`${this.name} successfully used the "${attackSkill.name}" skill!`);
      targetPokemon.health -= attackSkill.damage;
      this.magic -= attackSkill.magicCost;
  
      console.log(`${targetPokemon.name} received ${attackSkill.damage} damage.`);
      console.log("-------------------");
  
      if (targetPokemon.health <= 0) {
        console.log(`${targetPokemon.name} is defeated!`);
        console.log("-------------------");
      }
    }
  
    getMagic() {
      console.log(`${this.name} received 20 magic back.`);
      this.magic += 20;
      console.log("-------------------");
    }
  }
  
  // Creating Pokemon instances
  let pikachu = new Pokemon("Pikachu", 120, 80);
  let bulbasaur = new Pokemon("Bulbasaur", 95, 105);
  let charizard = new Pokemon("Charizard", 150, 100);
  let squirtle = new Pokemon("Squirtle", 110, 90);
  let jigglypuff = new Pokemon("Jigglypuff", 100, 80);
  let meowth = new Pokemon("Meowth", 90, 75);
  let psyduck = new Pokemon("Psyduck", 100, 85);
  let snorlax = new Pokemon("Snorlax", 200, 120);
  
  // Creating AttackSkill instances
  let lightning = new AttackSkill("Lightning", 40, 30);
  let poisonSeed = new AttackSkill("Poison Seed", 20, 20);
  let flamethrower = new AttackSkill("Flamethrower", 50, 35);
  let waterGun = new AttackSkill("Water Gun", 35, 25);
  let sing = new AttackSkill("Sing", 15, 10);
  let scratch = new AttackSkill("Scratch", 25, 15);
  let confusion = new AttackSkill("Confusion", 30, 20);
  let bodySlam = new AttackSkill("Body Slam", 45, 30);
  
  // Teaching attacks to the Pokemon
  pikachu.learnAttackSkill(lightning);
  bulbasaur.learnAttackSkill(poisonSeed);
  charizard.learnAttackSkill(flamethrower);
  squirtle.learnAttackSkill(waterGun);
  jigglypuff.learnAttackSkill(sing);
  meowth.learnAttackSkill(scratch);
  psyduck.learnAttackSkill(confusion);
  snorlax.learnAttackSkill(bodySlam);
  
  // Example attacks
  pikachu.attack(0, bulbasaur);
  bulbasaur.attack(0, pikachu);
  charizard.attack(0, squirtle);
  jigglypuff.attack(0, meowth);
  psyduck.attack(0, snorlax);
  meowth.attack(0, charizard);
  squirtle.attack(0, jigglypuff);
  snorlax.attack(0, psyduck);
  
  // Displaying status
  pikachu.showStatus();
  bulbasaur.showStatus();
  charizard.showStatus();
  squirtle.showStatus();
  jigglypuff.showStatus();
  meowth.showStatus();
  psyduck.showStatus();
  snorlax.showStatus();
  
