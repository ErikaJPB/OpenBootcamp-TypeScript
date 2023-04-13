// Se utiliza para proporcionar un medio para acceder secuencialmente a los elementos de una colección sin exponer su representación interna.

// Ejemplo: Playlist, queremos que los usuarios puedan recorrer la lista de canciones sin exponer la estructura interna de la lista.

// Interfaz Iterator con 2 métodos, next y hasNext.
interface Iterator<T, TReturn = any, TNext = undefined> {
  next(value?: TNext): IteratorResult<T, TReturn>;
  return?(value?: TReturn): IteratorResult<T, TReturn>;
  throw?(e?: any): IteratorResult<T, TReturn>;
}

// Clase PlaylistIterator que implementa Iterator y recorre la lista de canciones.
class PlaylistIterator implements Iterator<string, any, undefined> {
  private index = 0;

  constructor(private playlist: Playlist) {}

  next(): IteratorYieldResult<string> | IteratorReturnResult<any> {
    const songs = this.playlist.getSongs();
    if (this.index < songs.length) {
      const song = songs[this.index];
      this.index++;
      return { value: song, done: false };
    } else {
      return { value: undefined, done: true };
    }
  }

  hasNext(): boolean {
    return this.index < this.playlist.getSongs().length;
  }
}

// Clase Playlist que almacena una lista de canciones y proporciona un método createIterator para crear una instancia de PlaylistIterator.
class Playlist {
  private songs: string[] = [];

  addSong(song: string): void {
    this.songs.push(song);
  }

  getSongs(): string[] {
    return this.songs;
  }

  createIterator(): Iterator<string, any, undefined> {
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
