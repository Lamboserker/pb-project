// AttackSkill class
class AttackSkill {
  constructor(name, damage, magicRequired) {
    this.name = name; // Name of the attack skill
    this.damage = damage; // Damage caused by the attack
    this.magicRequired = magicRequired; // Magic points required to use the attack
  }
}

// Pokemon class
class Pokemon {
  constructor(name, health, magic) {
    this.name = name; // Name of the Pokemon
    this.health = health; // Health points of the Pokemon
    this.magic = magic; // Magic points of the Pokemon
    this.skills = []; // Array to store learned attack skills
  }

  learnAttackSkill(attack) {
    this.skills.push(attack); // Add attack skill to the list of learned skills
  }

  showStatus() {
    console.log(`${this.name} status`);
    console.log(`Health: ${this.health}`);
    console.log(`Magic: ${this.magic}`);
    console.log("-------------------");
  }

  attack(attackIndex, targetPokemon) {
    if (attackIndex >= 0 && attackIndex < this.skills.length) { // Check if attack index is valid
      const attack = this.skills[attackIndex]; // Get the attack skill based on the index
      if (this.magic >= attack.magicRequired) { // Check if enough magic points are available
        console.log(`${this.name} launched skill '${attack.name}' successfully!`);
        targetPokemon.health -= attack.damage; // Reduce the target Pokemon's health based on the attack damage
        this.magic -= attack.magicRequired; // Reduce the Pokemon's magic points based on the required magic for the attack
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
    this.magic += 20; // Increase the Pokemon's magic points by 20
    console.log("-------------------");
  }
}

// Creating Pokemon and AttackSkills
let pikachu = new Pokemon("Pikachu", 120, 80); // Create Pikachu with health 120 and magic 80
let bulbasaur = new Pokemon("Bulbasaur", 95, 105); // Create Bulbasaur with health 95 and magic 105

let lightning = new AttackSkill("Lightning", 40, 30); // Create attack skill Lightning with damage 40 and magic requirement 30
let poisonSeed = new AttackSkill("Poison Seed", 20, 20); // Create attack skill Poison Seed with damage 20 and magic requirement 20

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
