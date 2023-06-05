import inquirer from "inquirer";
import play from "play-sound";

const player = play();

player.play("music/music.wav", (err) => {
  if (err) throw err;
});

class Pokemon {
  constructor(name, type, height, power, defence, health, attacks, picture) {
    this.name = name;
    this.type = type;
    this.height = height;
    this.power = power;
    this.defence = defence;
    this.health = health;
    this.advantage = undefined;
    this.attacks = attacks;
    this.picture = picture;
  }
}

const Pikachu = new Pokemon(
  "Pikachu",
  "electricity",
  100,
  250,
  400,
  1000,
  [
    { name: "Thunder Shock", power: 100 },
    { name: "Quick Attack", power: 80 },
  ],
  ` `
);

const Glumanda = new Pokemon(
  "Glumanda",
  "fire",
  125,
  150,
  700,
  1000,
  [
    { name: "Ember", power: 90 },
    { name: "Fire Spin", power: 120 },
  ],
  ``
);

const Shiggy = new Pokemon(
  "Shiggy",
  "water",
  125,
  250,
  400,
  1000,
  [
    { name: "Water Gun", power: 100 },
    { name: "Bubble", power: 80 },
  ],
  `⠀`
);

const Mewtu = new Pokemon(
  "Mewtu",
  "psychic",
  200,
  850,
  300,
  1000,
  [
    { name: "Psycho Blast", power: 200 },
    { name: "Psychic", power: 180 },
  ],
  `⠀`
);

const Abra = new Pokemon(
  "Abra",
  "psychic",
  180,
  250,
  400,
  1000,
  [
    { name: "Confusion", power: 100 },
    { name: "Psybeam", power: 120 },
  ],
  ` `
);

const Onix = new Pokemon(
  "Onix",
  "rock",
  900,
  150,
  1200,
  1000,
  [
    { name: "Rock Throw", power: 80 },
    { name: "Earthquake", power: 150 },
  ],
  ""
);

const Simsala = new Pokemon(
  "Simsala",
  "psychic",
  210,
  250,
  400,
  1000,
  [
    { name: "Psybeam", power: 120 },
    { name: "Shadow Ball", power: 140 },
  ],
  ""
);

const Mauzi = new Pokemon(
  "Mauzi",
  "normal",
  50,
  133,
  430,
  1000,
  [
    { name: "Scratch", power: 70 },
    { name: "Bite", power: 90 },
  ],
  ``
);

function beautifyOutput(text) {
  console.log(
    "\n===================================================================="
  );
  console.log(text);
  console.log(
    "====================================================================\n"
  );
}

function getAttackDamage(attacker, defender, attack) {
  const effectiveness = getEffectiveness(attacker.type, defender.type);
  const damage = Math.round(
    ((attack.power * attacker.power) / (defender.defence * 10)) * effectiveness
  );
  return damage;
}

function getEffectiveness(attackerType, defenderType) {
  if (attackerType === "electricity") {
    if (defenderType === "water") return 2;
    if (defenderType === "rock") return 0.5;
  }
  if (attackerType === "fire") {
    if (defenderType === "grass") return 2;
    if (defenderType === "water") return 0.5;
  }
  if (attackerType === "water") {
    if (defenderType === "fire") return 2;
    if (defenderType === "electricity") return 0.5;
  }
  if (attackerType === "grass") {
    if (defenderType === "water") return 2;
    if (defenderType === "fire") return 0.5;
  }
  if (attackerType === "rock") {
    if (defenderType === "fire") return 2;
    if (defenderType === "electricity") return 0.5;
  }
  if (attackerType === "psychic") {
    if (defenderType === "psychic") return 0.5;
  }
  return 1;
}

async function selectPokemon(pokemons) {
  const choices = pokemons.map((pokemon) => {
    return { name: pokemon.name, value: pokemon };
  });

  const { selectedPokemon } = await inquirer.prompt([
    {
      type: "list",
      name: "selectedPokemon",
      message: "Chose your Pokémon:",
      choices: choices,
    },
  ]);

  return selectedPokemon;
}

async function selectAttack(attacks) {
  const choices = attacks.map((attack) => {
    return { name: attack.name, value: attack };
  });

  const { selectedAttack } = await inquirer.prompt([
    {
      type: "list",
      name: "selectedAttack",
      message: "Choose an Attack:",
      choices: choices,
    },
  ]);

  return selectedAttack;
}

async function battle(playerPokemon, computerPokemon) {
  beautifyOutput(`A wild ${computerPokemon.name} has appeared!\n`);

  while (playerPokemon.health > 0 && computerPokemon.health > 0) {
    beautifyOutput(
      `${playerPokemon.name} (${playerPokemon.health} HP) vs. ${computerPokemon.name} (${computerPokemon.health} HP)\n`
    );

    const playerAttack = await selectAttack(playerPokemon.attacks);
    const computerAttack =
      computerPokemon.attacks[
        Math.floor(Math.random() * computerPokemon.attacks.length)
      ];

    const playerDamage = getAttackDamage(
      playerPokemon,
      computerPokemon,
      playerAttack
    );
    const computerDamage = getAttackDamage(
      computerPokemon,
      playerPokemon,
      computerAttack
    );

    computerPokemon.health -= playerDamage;
    playerPokemon.health -= computerDamage;

    beautifyOutput(
      `${playerPokemon.name} attacks with ${playerAttack.name} and deals ${computerPokemon.name} ${playerDamage} damage!`
    );
    beautifyOutput(
      `${computerPokemon.name} attacks with ${computerAttack.name} and deals ${playerPokemon.name} ${computerDamage} damage!\n`
    );
  }

  if (playerPokemon.health <= 0 && computerPokemon.health <= 0) {
    beautifyOutput("Tie! Both Pokémon are defeated.\n");
  } else if (playerPokemon.health <= 0) {
    beautifyOutput("You have lost! Your Pokémon has been defeated.\n");
  } else {
    beautifyOutput("You have won! The wild Pokémon has been defeated.\n");
  }
}

async function startGame() {
  beautifyOutput("Welcome to Pokémon Battle!\n");

  const playerPokemon = await selectPokemon([
    Pikachu,
    Glumanda,
    Shiggy,
    Mewtu,
    Abra,
    Onix,
    Simsala,
    Mauzi,
  ]);
  const computerPokemon = [
    Pikachu,
    Glumanda,
    Shiggy,
    Mewtu,
    Abra,
    Onix,
    Simsala,
    Mauzi,
  ][Math.floor(Math.random() * 8)];

  beautifyOutput(`You have chosen ${playerPokemon.name}\n`);
  beautifyOutput("The game begins!\n");

  await battle(playerPokemon, computerPokemon);

  const { playAgain } = await inquirer.prompt([
    {
      type: "confirm",
      name: "playAgain",
      message: "Would you like to play again?",
      default: true,
    },
  ]);

  if (playAgain) {
    startGame();
  } else {
    beautifyOutput("Thanks for playing! See you next time!\n");
    player.stop();
  }
}

startGame();
