// Se utiliza para mantener una lista de objetos que necesitan ser notificados cuando un objeto cambia y asi asegurar que todos los objetos interesados sean actualizados al mismo tiempo y de manera consistente. Consta de dos tipos de objetos: El **Sujeto** y los **Observadores**. El sujeto es el que esta siendo observado y notificara a los observadores cuando cambie su estado.

// Ejemplo: Sensor de temperatura.

// Interfaz Observer que define los métodos que los observadores deben implementar para ser notificados sobre los cambios del estado del sujeto.

interface Observer {
  update(temperature: number): void;
}

// Clase Subject que representa el sensor de temperatura y mantiene una lista de observadores que necesitan ser notificados cuando cambia el valor de la temperatura.

class Subject {
  private observers: Observer[] = [];
  private temperature: number = 0;

  //Agrega un observador a la lista de observadores del sujeto.

  public addObserver(observer: Observer): void {
    this.observers.push(observer);
  }

  // Elimina un observador de la lista de observadores del sujeto.
  public removeObserver(observer: Observer): void {
    this.observers = this.observers.filter((o) => o !== observer);
  }

  // Notifica a todos los observadores en la lista de observadores que ha ocurrido un cambio de temperatura llamando al método update de cada observador.

  public notifyObservers(): void {
    for (const observer of this.observers) {
      observer.update(this.temperature);
    }
  }

  public setTemperature(temperature: number): void {
    this.temperature = temperature;
    this.notifyObservers();
  }
}

// Clase TemperatureDisplay que implementa la interfaz Observer y que se encarga de mostrar el valor de la temperatura en la consola cada vez que se produce un cambio en el valor de la temperatura.

class TemperatureDisplay implements Observer {
  public update(temperature: number): void {
    console.log(`La temperatura actual es: ${temperature} grados Celsius`);
  }
}

// Uso del Observador

const subject = new Subject();
const display1 = new TemperatureDisplay();
const display2 = new TemperatureDisplay();

subject.addObserver(display1);
subject.addObserver(display2);

subject.setTemperature(20); // La temperatura actual es de 20 grados Celsius
