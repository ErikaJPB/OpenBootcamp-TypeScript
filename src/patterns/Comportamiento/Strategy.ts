// Permite definir una familia de algoritmos, encapsular cada uno como un objeto y hacerlos intercambiables. Esto permite que los algoritmos varíen independientemente de los clientes que los usan.

// Interfaz que define un algoritmo
interface SortingStrategy {
  sort(data: number[]): number[];
}

// Implementación del algoritmo de ordenamiento BubbleSort

class BubbleSort implements SortingStrategy {
  sort(data: number[]): number[] {
    for (let i = 0; i < data.length - 1; i++) {
      for (let j = 0; j < data.length - i - 1; j++) {
        if (data[j] > data[j + 1]) {
          let temp = data[j];
          data[j] = data[j + 1];
          data[j + 1] = temp;
        }
      }
    }
    return data;
  }
}

// Implementación del algoritmo de ordenamiento SelectionSort

class SelectionSort implements SortingStrategy {
  sort(data: number[]): number[] {
    for (let i = 0; i < data.length - 1; i++) {
      let min = i;
      for (let j = i + 1; j < data.length; j++) {
        if (data[j] < data[min]) {
          min = j;
        }
      }
      let temp = data[i];
      data[i] = data[min];
      data[min] = temp;
    }
    return data;
  }
}

// Clase Context que utiliza la estrategia de ordenamiento seleccionada.

class Sorter {
  private strategy: SortingStrategy;

  constructor(strategy: SortingStrategy) {
    this.strategy = strategy;
  }

  // Método para cambiar la estrategia de ordenamiento.

  public setStrategy(strategy: SortingStrategy): void {
    this.strategy = strategy;
  }

  // Método para ordenar los datos utilizando la estrategia seleccionada.

  public sort(data: number[]): number[] {
    return this.strategy.sort(data);
  }
}

// Uso de Strategy

// Creación de un objeto Sorter con la estrategia de ordenamiento BubbleSort
const sorter = new Sorter(new BubbleSort());

// Lista de números desordenados

const data = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];

// Ordenamiento de los números utilizando la estrategia de ordenamiento "Burbuja"
console.log(sorter.sort(data)); // [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]

// Cambio de la estrategia de ordenamiento a "Selección"
sorter.setStrategy(new SelectionSort());

// Ordenamiento de los números utilizando la estrategia de ordenamiento "Selección"
console.log(sorter.sort(data)); // [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]
