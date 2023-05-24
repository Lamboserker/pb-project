const readline = require('readline-sync');

const Pikachu = {
  name: "Pikachu",
  type: "electricity",
  height: 100,
  power: 250,
  defence: 400,
  health: 1000,
  advantage: undefined,
};

const Glumanda = {
  name: "Glumanda",
  type: "fire",
  height: 125,
  power: 150,
  defence: 700,
  health: 1000,
  advantage: undefined,
};

const Shiggy = {
  name: "Shiggy",
  type: "water",
  height: 125,
  power: 250,
  defence: 400,
  health: 1000,
  advantage: undefined,
};

const Mewtu = {
  name: "Mewtu",
  type: "psychic",
  height: 200,
  power: 850,
  defence: 300,
  health: 1000,
  advantage: undefined,
};

const Abra = {
  name: "Abra",
  type: "psychic",
  height: 180,
  power: 250,
  defence: 400,
  health: 1000,
  advantage: undefined,
};

const Onix = {
  name: "Onix",
  type: "rock",
  height: 900,
  power: 150,
  defence: 1200,
  health: 1000,
  advantage: undefined,
};

const Simsala = {
  name: "Simsala",
  type: "psychic",
  height: 210,
  power: 250,
  defence: 400,
  health: 1000,
  advantage: undefined,
};

const Mauzi = {
  name: "Mauzi",
  type: "normal",
  height: 50,
  power: 133,
  defence: 430,
  health: 1000,
  advantage: undefined,
};

// Funktion, um die Pokémon-Liste anzuzeigen
function showPokemonList() {
  console.log("--------------------------------");
  console.log("Choose a Pokémon:");
  console.log("1. Pikachu");
  console.log("2. Glumanda");
  console.log("3. Shiggy");
  console.log("4. Mewtu");
  console.log("5. Abra");
  console.log("6. Onix");
  console.log("7. Simsala");
  console.log("8. Mauzi");
  console.log("--------------------------------");
}

// Funktion, um den Kampf zwischen zwei Pokémon zu simulieren
function pokemonBattle(pokemon1, pokemon2) {
  console.log("A Fight starts!");
  console.log("--------------------------------");

  // Zeige die Stats der Pokémon an
  console.log("--------------------------------");
  console.log(`${pokemon1.name} is a ${pokemon1.type} Pokémon`);
  console.log("Power: " + pokemon1.power);
  console.log("Defence: " + pokemon1.defence);
  console.log("Health: " + pokemon1.health);

  console.log("--------------------------------");
  console.log(`${pokemon2.name} is a ${pokemon2.type} Pokémon`);
  console.log("Power: " + pokemon2.power);
  console.log("Defence: " + pokemon2.defence);
  console.log("Health: " + pokemon2.health);
  console.log("--------------------------------");

  // Kampflogik
  while (pokemon1.health > 0 && pokemon2.health > 0) {
    // Berechne den Schaden, den jedes Pokémon im aktuellen Zug verursacht
    const damage1 = pokemon1.power - pokemon2.defence;
    const damage2 = pokemon2.power - pokemon1.defence;

    // Aktualisiere die Gesundheit der Pokémon entsprechend dem verursachten Schaden
    pokemon1.health -= damage2;
    pokemon2.health -= damage1;
  }

  // Bestimme den Sieger basierend auf der verbleibenden Gesundheit
  if (pokemon1.health <= 0 && pokemon2.health <= 0) {
    console.log("It's a tie!");
  } else if (pokemon1.health <= 0) {
    console.log(`${pokemon2.name} wins!`);
  } else {
    console.log(`${pokemon1.name} wins!`);
  }

  // Zeige die verbleibende Gesundheit beider Pokémon an
  console.log("--------------------------------");
  console.log(`${pokemon1.name} Health: ${pokemon1.health}`);
  console.log(`${pokemon2.name} Health: ${pokemon2.health}`);
  console.log("--------------------------------");
}

// Hauptprogramm
function main() {
  showPokemonList();

  // Auswahl des ersten Pokémon
  const pokemonIndex1 = readline.questionInt("Choose the first Pokémon (Number): ");
  const pokemon1 = getPokemonByIndex(pokemonIndex1);

  // Auswahl des zweiten Pokémon
  const pokemonIndex2 = readline.questionInt("Choose the second Pokémon (Number): ");
  const pokemon2 = getPokemonByIndex(pokemonIndex2);

  // Kampf starten
  pokemonBattle(pokemon1, pokemon2);
}

// Hilfsfunktion, um das Pokémon-Objekt anhand des Index zu erhalten
function getPokemonByIndex(index) {
  switch (index) {
    case 1:
      return Pikachu;
    case 2:
      return Glumanda;
    case 3:
      return Shiggy;
    case 4:
      return Mewtu;
    case 5:
      return Abra;
    case 6:
      return Onix;
    case 7:
      return Simsala;
    case 8:
      return Mauzi;
    default:
      return null;
  }
}

// Starte das Hauptprogramm
main();
