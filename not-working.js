(function () {
  const consoleContainer = document.getElementById("console");
  const commandInput = document.getElementById("command-input");

  function logToConsole(text) {
    const line = document.createElement("p");
    line.textContent = text;
    consoleContainer.appendChild(line);
  }

  function executeCommand() {
    const command = commandInput.value;
    logToConsole("$ " + command); // Anzeigen des eingegebenen Befehls

    // Hier kannst du die Funktionalität für verschiedene Befehle implementieren
    if (command === "date") {
      const currentDate = new Date();
      logToConsole(currentDate.toDateString());
    } else if (command === "help") {
      logToConsole("Verfügbare Befehle: date, help");
    } else {
      logToConsole(
        "Befehl nicht erkannt. Gib 'help' ein, um verfügbare Befehle anzuzeigen."
      );
    }

    commandInput.value = ""; // Leeren des Eingabefelds nach Ausführung
  }

  window.logToConsole = logToConsole;
  window.executeCommand = executeCommand;

  logToConsole("Willkommen bei der Bash-Konsole im Browser!");
  logToConsole("Gib einen Befehl ein und klicke auf 'Ausführen'.");
})();
