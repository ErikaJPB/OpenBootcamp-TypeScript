"use strict";
// Se utiliza para guardar y restaurar el estado de un objeto sin violar la encapsulación. Este patrón se basa en tres objetos principales: el objeto *Originator* que tiene un estado interno que puede cambiar con el tiempo, el objeto *Memento* que se utiliza para almacenar el estado anterior del objeto Originator, y el objeto *Caretaker* que se encarga de mantener una lista de los objetos Memento y de restaurar el estado del objeto Originator si es necesario.
// Clase Memento que almacena el estado anterior del objeto Originador
class Memento {
    constructor(state) {
        this.state = state;
    }
    getState() {
        return this.state;
    }
}
// Clase Originator que tiene un estado interno que puede cambiar con el tiempo.
class Editor {
    constructor() {
        this.state = "";
    }
    setState(state) {
        this.state = state;
    }
    getState() {
        return this.state;
    }
    // Método para guardar el estado actual del Editor en Memento.
    save() {
        return new Memento(this.state);
    }
    // Método para restaurar el estado del Editor a partir de Memento.
    restore(memento) {
        this.state = memento.getState();
    }
}
// Clase Caretaker que se encarga de mantener una lista de objetos Memento y de restaurar el estado del Editor.
class HistoryList {
    constructor() {
        this.mementos = [];
    }
    push(memento) {
        this.mementos.push(memento);
    }
    pop() {
        return this.mementos.pop();
    }
}
// Uso Memento
const editor = new Editor();
const historyList = new HistoryList();
editor.setState("Estado 1");
historyList.push(editor.save());
editor.setState("Estado 2");
historyList.push(editor.save());
editor.setState("Estado 3");
const memento = historyList.pop();
if (memento !== undefined) {
    // Verificación de undefined
    editor.restore(memento);
    console.log(editor.getState()); // Imprimir el estado actual del Editor
}
else {
    console.log("No hay más estados anteriores para restaurar.");
}
//# sourceMappingURL=Memento.js.map