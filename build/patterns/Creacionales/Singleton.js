"use strict";
/* The above class is a TypeScript implementation of the Singleton design pattern. */
class Singleton {
    constructor() { }
    static getInstance() {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }
    mostrarPorConsola() {
        console.log("Metodo Singleton");
    }
}
//# sourceMappingURL=Singleton.js.map