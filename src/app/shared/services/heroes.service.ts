import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {
  apiUrl: string = 'https://gateway.marvel.com/v1/public/'
  apiKey: string = '056499ce62ca3d57287c25e256833d5e'
  hash: string = 'abf5d87639a5cb57215a6144a1693a9b'
  ts: number = 1000

  constructor(private http: HttpClient) { }

  getHeroesList() {
    return this.http.get<any>(`${this.apiUrl}characters?apikey=${this.apiKey}&hash=${this.hash}&=ts${this.ts}`);
  }

  getHeroeDetail(id: string) {
    return this.http.get<any>(`${this.apiUrl}characters/${id}?apikey=${this.apiKey}&hash=${this.hash}&=ts${this.ts}`);
  }
}
