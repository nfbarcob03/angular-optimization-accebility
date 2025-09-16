import { Component, OnInit } from '@angular/core';
import { RickMortyService, Character, ApiResponse } from '../../services/rick-morty.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {
  characters: Character[] = [];
  loading = false;
  error = '';
  currentPage = 1;
  totalPages = 1;

  constructor(private readonly rickMortyService: RickMortyService) { }

  ngOnInit(): void {
    this.loadCharacters();
  }

  loadCharacters(page: number = 1): void {
    this.loading = true;
    this.error = '';
    
    this.rickMortyService.getCharacters(page).subscribe({
      next: (response: ApiResponse) => {
        this.characters = response.results;
        this.currentPage = page;
        this.totalPages = response.info.pages;
        this.loading = false;
      },
      error: (error) => {
        this.error = 'Error loading characters. Please try again.';
        this.loading = false;
        console.error('Error:', error);
      }
    });
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.loadCharacters(this.currentPage - 1);
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.loadCharacters(this.currentPage + 1);
    }
  }

  getStatusClass(status: string): string {
    switch (status.toLowerCase()) {
      case 'alive':
        return 'status-alive';
      case 'dead':
        return 'status-dead';
      default:
        return 'status-unknown';
    }
  }
}