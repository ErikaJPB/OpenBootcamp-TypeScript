"use strict";
// Se utiliza para encapsular una solicitud como un objeto, lo que permite parametrizar clientes con diferentes solicitudes, hacer cola o registrar solicitudes y soportar operaciones reversibles. Actúa como intermediario entre cliente y receptor y puede contener información sobre la solicitud, con los parámetros necesarios para la ejecución.
// Clases concretas para cada comando
class CopyCommand {
    execute() {
        console.log("Texto copiado.");
    }
}
class PasteCommand {
    execute() {
        console.log("Texto pegado.");
    }
}
class UndoCommand {
    execute() {
        console.log("Acción deshecha.");
    }
}
// Clase Invoker que toma un objeto Command y llama a su método execute.
class Invoker {
    constructor(command) {
        if (command) {
            this.command = command;
        }
    }
    setCommand(command) {
        this.command = command;
    }
    executeCommand() {
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
//# sourceMappingURL=Command.js.map