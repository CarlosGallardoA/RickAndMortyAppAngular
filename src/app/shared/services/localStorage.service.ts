import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Characters } from '@shared/interface/data.interface';
const MY_FAVORITE = 'myFavorite';
@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  private charactersFavSubject = new BehaviorSubject<Characters[]>(null);
  // eslint-disable-next-line @typescript-eslint/member-ordering
  charactersFav$ = this.charactersFavSubject.asObservable();
  constructor() {
    this.initialStorage();
  }
  addOrRemoveFavorite(character: Characters): void {
    const { id } = character;
    const currentFav = this.getFavoriteCharacters();
    const found = !!currentFav.find((fav: Characters) => fav.id === id);
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    found ? this.removeFromFavorite(id) : this.addToFavorite(character);
  }

  private addToFavorite(character: Characters): void {
    try {
      const currentFav = this.getFavoriteCharacters();
      localStorage.setItem(
        'MY_FAVORITE',
        JSON.stringify([...currentFav, character])
      );
      this.charactersFavSubject.next([...currentFav, character]);
    } catch (e) {
      console.log('error al guardar en localStorage', e);
    }
  }
  private removeFromFavorite(id: number): void {
    try {
      const currentFav = this.getFavoriteCharacters();
      const newFav = currentFav.filter(
        (character: Characters) => character.id !== id
      );
      localStorage.setItem('MY_FAVORITE', JSON.stringify(newFav));
      this.charactersFavSubject.next(newFav);
    } catch (e) {
      console.log('error al borrar de localStorage', e);
    }
  }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  getFavoriteCharacters(): any {
    try {
      const charactersFav = JSON.parse(localStorage.getItem('MY_FAVORITE'));
      this.charactersFavSubject.next(charactersFav);
      return charactersFav;
    } catch (e) {
      console.log(e);
    }
  }
  // eslint-disable-next-line @typescript-eslint/member-ordering
  clearStorage(): void {
    try {
      localStorage.clear();
    } catch (e) {
      console.log('error al limpiar localStorage', e);
    }
  }

  private initialStorage(): void {
    const currents = JSON.parse(localStorage.getItem('MY_FAVORITE'));
    if (!currents) {
      localStorage.setItem('MY_FAVORITE', JSON.stringify([]));
    }
    this.getFavoriteCharacters();
  }
}
