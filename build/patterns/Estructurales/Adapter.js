"use strict";
// Se utiliza para permitir que dos clases incompatibles trabajen juntas mediante la creación de una clase intermedia que actúa como un traductor entre ellas. El adapter convierte la interfaz de una clase en otra interfaz esperada por el cliente, permitiendo que las clases trabajen juntas sin modificar su código fuente.
// Clase que reproduce archivos mp3
class Mp3Player {
    playMp3(fileName) {
        console.log(`Reproduciendo archivo mp3: ${fileName}`);
    }
}
// Adapter que convierte la interfaz de Mp3Player en la interfaz esperada por el cliente
class Mp3PlayerAdapter {
    constructor(mp3Player) {
        this._mp3Player = mp3Player;
    }
    play(audioType, fileName) {
        if (audioType.toLowerCase() === "mp3") {
            this._mp3Player.playMp3(fileName);
        }
        else {
            console.log(`El tipo de archivo ${audioType} no es compatible con el reproductor`);
        }
    }
}
// Uso del Adapter
const mp3Player = new Mp3Player();
const mp3PlayerAdapter = new Mp3PlayerAdapter(mp3Player);
mp3PlayerAdapter.play("mp3", "song.mp3"); // Reproduciendo archivo mp3: song.mp3
mp3PlayerAdapter.play("mp4", "movie.mp4"); // El tipo de archivo mp4 no es compatible con el reproductor
//# sourceMappingURL=Adapter.js.map