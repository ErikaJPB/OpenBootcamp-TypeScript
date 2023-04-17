"use strict";
// Se utiliza para permitir que un objeto altere su comportamiento cuando su estado interno cambia. Se basa en la idea de que un objeto puede cambiar su clase en tiempo de ejecución, lo que le permite cambiar su comportamiento sin necesidad de cambiar su interfaz. El objeto que cambia su comportamiento se conoce como  **Context** y las diferentes implementaciones de comportamiento se conocen como **Estados**.
// Implementación del Estado "Reproduciendo"
class PlayingState {
    constructor(player) {
        this.player = player;
    }
    play() {
        console.log("La música ya está en reproducción.");
    }
    pause() {
        console.log("Pausando la música.");
        this.player.setState(this.player.getPausedState()); // Cambia el estado del Context
    }
    stop() {
        console.log("Deteniendo la música.");
        this.player.setState(this.player.getStoppedState()); // Cambia el estado del Context
    }
}
// Implementación del Estado "En pausa"
class PausedState {
    constructor(player) {
        this.player = player;
    }
    play() {
        console.log("Reanudando la reproducción de la música.");
        this.player.setState(this.player.getPlayingState()); // Cambia el estado del Context
    }
    pause() {
        console.log("La música ya se encuentra en pausa.");
    }
    stop() {
        console.log("Deteniendo la música.");
        this.player.setState(this.player.getStoppedState()); // Cambia el estado del Context
    }
}
// Implementación del Estado "Detenido"
class StoppedState {
    constructor(player) {
        this.player = player;
    }
    play() {
        console.log("Comenzando la reproducción de la música.");
        this.player.setState(this.player.getPlayingState()); // Cambia el estado del Context
    }
    pause() {
        console.log("La música se encuentra detenida. No se puede pausar.");
    }
    stop() {
        console.log("La música ya se encuentra detenida.");
    }
}
// Clase Context que mantiene una referencia al objeto Estado actual y delega la llamada a los métodos de comportamiento al objeto Estado correspondiente
class MusicPlayer {
    constructor() {
        // Inicio de los Estados
        this.playingState = new PlayingState(this);
        this.pausedState = new PausedState(this);
        this.stoppedState = new StoppedState(this);
        // Estado inicial del Context
        this.state = this.stoppedState;
    }
    // Cambia el estado del Context
    setState(state) {
        this.state = state;
    }
    // Métodos para obtener referencias a los diferentes Estados
    getPlayingState() {
        return this.playingState;
    }
    getPausedState() {
        return this.pausedState;
    }
    getStoppedState() {
        return this.stoppedState;
    }
    // Delega la llamada a los métodos de comportamiento al objeto Estado correspondiente
    play() {
        this.state.play();
    }
    pause() {
        this.state.pause();
    }
    stop() {
        this.state.stop();
    }
}
// Creación del objeto Context
const player = new MusicPlayer();
// Comienza la reproducción de la música
player.play(); // Comenzando la reproducción de la música.
// Pausa la reproducción de la música
player.pause(); // Pausando la música.
// Reanuda la reproducción de la música
player.play(); // Reanudando la reproducción de la música.
// Detiene la reproducción de la música
player.stop(); // Deteniendo la música.
// Trata de pausar la música cuando está detenida
player.pause(); // La música se encuentra detenida. No se puede pausar.
//# sourceMappingURL=State.js.map