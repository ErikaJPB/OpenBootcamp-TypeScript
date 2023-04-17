"use strict";
// Se utiliza para proporcionar un medio para acceder secuencialmente a los elementos de una colección sin exponer su representación interna.
// Clase PlaylistIterator que implementa Iterator y recorre la lista de canciones.
class PlaylistIterator {
    constructor(playlist) {
        this.playlist = playlist;
        this.index = 0;
    }
    next() {
        const songs = this.playlist.getSongs();
        if (this.index < songs.length) {
            const song = songs[this.index];
            this.index++;
            return { value: song, done: false };
        }
        else {
            return { value: undefined, done: true };
        }
    }
    hasNext() {
        return this.index < this.playlist.getSongs().length;
    }
}
// Clase Playlist que almacena una lista de canciones y proporciona un método createIterator para crear una instancia de PlaylistIterator.
class Playlist {
    constructor() {
        this.songs = [];
    }
    addSong(song) {
        this.songs.push(song);
    }
    getSongs() {
        return this.songs;
    }
    createIterator() {
        return new PlaylistIterator(this);
    }
}
// USO Iterator
const playlist = new Playlist();
playlist.addSong("Canción 1");
playlist.addSong("Canción 2");
playlist.addSong("Canción 3");
const iterator = playlist.createIterator();
let result = iterator.next();
while (!result.done) {
    console.log(result.value);
    result = iterator.next();
}
//# sourceMappingURL=Iterator.js.map