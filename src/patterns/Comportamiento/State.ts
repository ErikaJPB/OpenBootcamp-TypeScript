// Se utiliza para permitir que un objeto altere su comportamiento cuando su estado interno cambia. Se basa en la idea de que un objeto puede cambiar su clase en tiempo de ejecución, lo que le permite cambiar su comportamiento sin necesidad de cambiar su interfaz. El objeto que cambia su comportamiento se conoce como  **Context** y las diferentes implementaciones de comportamiento se conocen como **Estados**.

// Ejemplo: Reproductor de música. El reproductor de música tiene diferentes estados, como "Reproduciendo", "En pausa", "Detenido", etc. Cada estado tiene un comportamiento diferente, como reproducir música, detener la reproducción o cambiar al siguiente tema. Al cambiar el estado del reproductor, se cambia su comportamiento sin necesidad de cambiar su interfaz.

// Interfaz que define los métodos que cada Estado debe implementar.

interface State {
  play(): void;
  pause(): void;
  stop(): void;
}

// Implementación del Estado "Reproduciendo"
class PlayingState implements State {
  private player: MusicPlayer; // Referencia al Context

  constructor(player: MusicPlayer) {
    this.player = player;
  }

  public play(): void {
    console.log("La música ya está en reproducción.");
  }

  public pause(): void {
    console.log("Pausando la música.");
    this.player.setState(this.player.getPausedState()); // Cambia el estado del Context
  }

  public stop(): void {
    console.log("Deteniendo la música.");
    this.player.setState(this.player.getStoppedState()); // Cambia el estado del Context
  }
}

// Implementación del Estado "En pausa"
class PausedState implements State {
  private player: MusicPlayer; // Referencia al Context

  constructor(player: MusicPlayer) {
    this.player = player;
  }

  public play(): void {
    console.log("Reanudando la reproducción de la música.");
    this.player.setState(this.player.getPlayingState()); // Cambia el estado del Context
  }

  public pause(): void {
    console.log("La música ya se encuentra en pausa.");
  }

  public stop(): void {
    console.log("Deteniendo la música.");
    this.player.setState(this.player.getStoppedState()); // Cambia el estado del Context
  }
}

// Implementación del Estado "Detenido"
class StoppedState implements State {
  private player: MusicPlayer; // Referencia al Context

  constructor(player: MusicPlayer) {
    this.player = player;
  }

  public play(): void {
    console.log("Comenzando la reproducción de la música.");
    this.player.setState(this.player.getPlayingState()); // Cambia el estado del Context
  }

  public pause(): void {
    console.log("La música se encuentra detenida. No se puede pausar.");
  }

  public stop(): void {
    console.log("La música ya se encuentra detenida.");
  }
}

// Clase Context que mantiene una referencia al objeto Estado actual y delega la llamada a los métodos de comportamiento al objeto Estado correspondiente
class MusicPlayer {
  private playingState: State; // Referencia al Estado "Reproduciendo"
  private pausedState: State; // Referencia al Estado "En pausa"
  private stoppedState: State; // Referencia al Estado "Detenido"

  private state: State; // Referencia al Estado actual

  constructor() {
    // Inicio de los Estados
    this.playingState = new PlayingState(this);
    this.pausedState = new PausedState(this);
    this.stoppedState = new StoppedState(this);

    // Estado inicial del Context
    this.state = this.stoppedState;
  }

  // Cambia el estado del Context
  public setState(state: State): void {
    this.state = state;
  }

  // Métodos para obtener referencias a los diferentes Estados
  public getPlayingState(): State {
    return this.playingState;
  }

  public getPausedState(): State {
    return this.pausedState;
  }

  public getStoppedState(): State {
    return this.stoppedState;
  }

  // Delega la llamada a los métodos de comportamiento al objeto Estado correspondiente
  public play(): void {
    this.state.play();
  }

  public pause(): void {
    this.state.pause();
  }

  public stop(): void {
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
