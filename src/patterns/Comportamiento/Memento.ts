// Se utiliza para guardar y restaurar el estado de un objeto sin violar la encapsulación. Este patrón se basa en tres objetos principales: el objeto *Originator* que tiene un estado interno que puede cambiar con el tiempo, el objeto *Memento* que se utiliza para almacenar el estado anterior del objeto Originator, y el objeto *Caretaker* que se encarga de mantener una lista de los objetos Memento y de restaurar el estado del objeto Originator si es necesario.

// Clase Memento que almacena el estado anterior del objeto Originador

class Memento {
  constructor(private state: string) {}

  getState(): string {
    return this.state;
  }
}

// Clase Originator que tiene un estado interno que puede cambiar con el tiempo.

class Editor {
  private state: string;

  constructor() {
    this.state = "";
  }

  setState(state: string): void {
    this.state = state;
  }

  getState(): string {
    return this.state;
  }

  // Método para guardar el estado actual del Editor en Memento.

  save(): Memento {
    return new Memento(this.state);
  }

  // Método para restaurar el estado del Editor a partir de Memento.

  restore(memento: Memento): void {
    this.state = memento.getState();
  }
}

// Clase Caretaker que se encarga de mantener una lista de objetos Memento y de restaurar el estado del Editor.

class HistoryList {
  private mementos: Memento[] = [];

  push(memento: Memento): void {
    this.mementos.push(memento);
  }

  pop(): Memento | undefined {
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
} else {
  console.log("No hay más estados anteriores para restaurar.");
}
