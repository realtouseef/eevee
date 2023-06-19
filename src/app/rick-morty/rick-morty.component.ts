import { Component, OnInit } from '@angular/core';
import { RickMortyService } from '../services/rick-morty/rick-morty.service';
import { CharacterTypes } from 'src/types';

@Component({
  selector: 'app-rick-morty',
  templateUrl: './rick-morty.component.html',
  styleUrls: ['./rick-morty.component.css'],
})
export class RickMortyComponent implements OnInit {
  rickAndMorty: CharacterTypes = { results: [] };
  isLoading = false;

  constructor(private characters: RickMortyService) {}

  ngOnInit(): void {
    this.showAllCharacters();
  }

  showAllCharacters() {
    this.isLoading = true;
    return this.characters.getAllCharacters().subscribe(
      (result) => {
        this.rickAndMorty = result;
        this.isLoading = false;
      },
      (error: any) => {
        console.error('Error fetching data:', error);
      }
    );
  }
}
