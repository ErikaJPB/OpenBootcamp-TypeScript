"use strict";
// Se utiliza para reducir la complejidad en sistemas con muchos objetos interactuando entre si. En lugar de permitir que los objetos se comuniquen entre si, se introduce un objeto mediador que se encarga de la comunicación entre ellos. Cada objeto debe conocer al mediador pero no es necesario que conozca los demás objetos.
// Ejemplo: Chatroom
// Clase Mediator que se encarga de coordinar las interacciones entre los objetos.
class ChatRoom {
    sendMessage(user, message) {
        console.log(`[${user.getName()}] envió mensaje: ${message}`);
    }
}
// Clase User, interactúa con otros usuarios a traves del mediador.
class User {
    constructor(name, chatRoom) {
        this.name = name;
        this.chatRoom = chatRoom;
    }
    getName() {
        return this.name;
    }
    send(message) {
        this.chatRoom.sendMessage(this, message);
    }
    receive(message) {
        console.log(`[${this.getName()}] recibió mensaje: ${message}`);
    }
}
// Uso Mediator
const chatRoom = new ChatRoom();
const user1 = new User("User 1", chatRoom);
const user2 = new User("User 2", chatRoom);
user1.send("Hola, como estas?");
user2.send("Estoy bien, gracias. Y tu?");
user1.send("También estoy bien, gracias por preguntar.");
//# sourceMappingURL=Mediator.js.map