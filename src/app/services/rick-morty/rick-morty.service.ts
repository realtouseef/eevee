import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CharacterTypes } from 'src/types';

@Injectable({
  providedIn: 'root',
})
export class RickMortyService {
  BASE_URL = 'https://rickandmortyapi.com/api/character';

  constructor(private http: HttpClient) {}

  getAllCharacters() {
    return this.http.get<CharacterTypes>(this.BASE_URL);
  }
}
