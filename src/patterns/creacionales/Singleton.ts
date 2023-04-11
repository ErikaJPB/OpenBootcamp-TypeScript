/* The above class is a TypeScript implementation of the Singleton design pattern. */
class Singleton {
  private static instance: Singleton;
  private constructor() {}
  static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }

  public mostrarPorConsola() {
    console.log("Metodo Singleton");
  }
}
