// Se utiliza para encapsular una solicitud como un objeto, lo que permite parametrizar clientes con diferentes solicitudes, hacer cola o registrar solicitudes y soportar operaciones reversibles. Actúa como intermediario entre cliente y receptor y puede contener información sobre la solicitud, con los parámetros necesarios para la ejecución.

// Ejemplo:Editor de texto que permite a los usuarios realizar acciones como copiar, pegar y deshacer.

// Interfaz Command que especifica un método execute que realiza la operación de comando

interface Command {
  execute(): void;
}

// Clases concretas para cada comando

class CopyCommand implements Command {
  execute(): void {
    console.log("Texto copiado.");
  }
}

class PasteCommand implements Command {
  execute(): void {
    console.log("Texto pegado.");
  }
}

class UndoCommand implements Command {
  execute(): void {
    console.log("Acción deshecha.");
  }
}

// Clase Invoker que toma un objeto Command y llama a su método execute.

class Invoker {
  private command!: Command;

  constructor(command?: Command) {
    if (command) {
      this.command = command;
    }
  }

  setCommand(command: Command): void {
    this.command = command;
  }

  executeCommand(): void {
    this.command.execute();
  }
}

// Utilizamos el objeto Invoker para invocar diferentes comandos

const invoker = new Invoker();

const copyCommand = new CopyCommand();
const pasteCommand = new PasteCommand();
const undoCommand = new UndoCommand();

invoker.setCommand(copyCommand);
invoker.executeCommand(); // Texto copiado.

invoker.setCommand(pasteCommand);
invoker.executeCommand(); // Texto pegado.

invoker.setCommand(undoCommand);
invoker.executeCommand(); // Acción deshecha.
