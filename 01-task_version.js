// AttackSkill class
class AttackSkill {
  constructor(name, damage, magicRequired) {
    this.name = name;
    this.damage = damage;
    this.magicRequired = magicRequired;
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

  learnAttackSkill(attack) {
    this.skills.push(attack);
  }

  showStatus() {
    console.log(`${this.name} status`);
    console.log(`Health: ${this.health}`);
    console.log(`Magic: ${this.magic}`);
    console.log("-------------------");
  }

  attack(attackIndex, targetPokemon) {
    if (attackIndex >= 0 && attackIndex < this.skills.length) {
      const attack = this.skills[attackIndex];
      if (this.magic >= attack.magicRequired) {
        console.log(`${this.name} launched skill '${attack.name}' successfully!`);
        targetPokemon.health -= attack.damage;
        this.magic -= attack.magicRequired;
        console.log(`${targetPokemon.name} got ${attack.damage} damage`);
        if (targetPokemon.health <= 0) {
          console.log(`${targetPokemon.name} is killed!`);
        }
      } else {
        console.log("Not enough magic, cannot launch attack!");
      }
    } else {
      console.log("Invalid attack index!");
    }
    console.log("-------------------");
  }

  getMagic() {
    console.log(`${this.name} got 20 magic back`);
    this.magic += 20;
    console.log("-------------------");
  }
}

// Creating Pokemon and AttackSkills
let pikachu = new Pokemon("Pikachu", 120, 80);
let bulbasaur = new Pokemon("Bulbasaur", 95, 105);

let lightning = new AttackSkill("Lightning", 40, 30);
let poisonSeed = new AttackSkill("Poison Seed", 20, 20);

// Pikachu learns attack skills
pikachu.learnAttackSkill(lightning);

// Bulbasaur learns attack skills
bulbasaur.learnAttackSkill(poisonSeed);

// Perform attacks and display statuses
console.log("Initial statuses:");
pikachu.showStatus();
bulbasaur.showStatus();

console.log("Performing attacks:");
pikachu.attack(0, bulbasaur);
bulbasaur.attack(0, pikachu);

console.log("Updated statuses after attacks:");
pikachu.showStatus();
bulbasaur.showStatus();

console.log("Performing more attacks:");
pikachu.attack(0, bulbasaur);
pikachu.attack(0, bulbasaur);

console.log("Status after using attacks:");
pikachu.showStatus();
bulbasaur.showStatus();

console.log("Using getMagic to replenish magic:");
pikachu.getMagic();

console.log("Performing another attack:");
pikachu.attack(0, bulbasaur);

console.log("Performing an attack with not enough magic:");
bulbasaur.attack(0, pikachu);

console.log("Final statuses:");
pikachu.showStatus();
bulbasaur.showStatus();
