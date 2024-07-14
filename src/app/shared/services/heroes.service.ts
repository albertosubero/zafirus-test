import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { heroesI } from '../interfaces/heroes.interface';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {
  //apiInfo
  apiUrl: string = 'https://gateway.marvel.com/v1/public/'
  apiKey: string = '056499ce62ca3d57287c25e256833d5ex'
  hash: string = 'abf5d87639a5cb57215a6144a1693a9b'
  ts: number = 1000

  private heroe = new BehaviorSubject<heroesI>({} as heroesI)
  public heroe$ = this.heroe.asObservable()

  constructor(private http: HttpClient) { }

  getHeroesList() {
    return this.http.get<any>(`${this.apiUrl}characters?apikey=${this.apiKey}&hash=${this.hash}&=ts${this.ts}`);
  }

  getHeroeDetail(id: string) {
    return this.http.get<any>(`${this.apiUrl}characters/${id}?apikey=${this.apiKey}&hash=${this.hash}&=ts${this.ts}`);
  }

  setHeroeData(data: heroesI) {
    this.heroe.next(data);
  }
}
