"use strict";
// Proporciona un objeto como un sustituto de otro objeto. El objetivo es controlar el acceso al objeto original, proporcionando una capa adicional de indirección entre el cliente y el objeto original.Un ejemplo común del patrón Proxy es el proxy remoto, donde el objeto proxy se utiliza para acceder a un objeto remoto. El objeto proxy se encarga de las comunicaciones con el objeto remoto y proporciona una interfaz similar a la del objeto original.
// La clase RealSubject es el objeto real que maneja la petición.
class RealSubject {
    request() {
        console.log("RealSubject:  Manejando la petición");
    }
}
// La clase ProxySubject actúa como un sustituto del objeto real y se encarga de controlar el acceso al objeto real.
class ProxySubject {
    constructor(realSubject) {
        this.realSubject = realSubject;
    }
    request() {
        // Verifica el acceso antes de permitir que la petición se envíe al objeto real.
        if (this.checkAccess()) {
            this.realSubject.request(); // Envía la petición al objeto real si se cumple la comprobación de acceso.
            this.logAccess(); // Registra el tiempo de la petición
        }
    }
    checkAccess() {
        console.log("Proxy:Comprobando el acceso antes de enviar la petición al RealSubject");
        return true; // Devuelve true para permitir todas las peticiones. En una implementación real, esto se podría cambiar para permitir solo ciertos tipos de peticiones o usuarios autorizados.
    }
    logAccess() {
        console.log("Proxy:Registrando el tiempo de la petición");
    }
}
// Uso del Proxy
const realSubject = new RealSubject(); // Crea una nueva instancia del objeto RealSubject.
const proxy = new ProxySubject(realSubject); // Crea una instancia del objeto ProxySubject y le pasa la instancia de RealSubject como argumento.
proxy.request(); // Llama al método request() del objeto ProxySubject, que se encarga de controlar el acceso y enviar la petición al objeto real si se cumple la comprobación de acceso.
//# sourceMappingURL=Proxy.js.map