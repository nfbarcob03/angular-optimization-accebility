import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { CharacterListComponent } from './components/character-list/character-list.component';
import { RickMortyService } from './services/rick-morty.service';

describe('AppModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AppModule,
        HttpClientTestingModule,
        RouterTestingModule
      ]
    }).compileComponents();
  });

  it('should create the module', () => {
    expect(AppModule).toBeDefined();
  });

  it('should provide RickMortyService', () => {
    const service = TestBed.inject(RickMortyService);
    expect(service).toBeTruthy();
  });

  it('should declare AppComponent', () => {
    const fixture = TestBed.createComponent(AppComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should declare CharacterListComponent', () => {
    const fixture = TestBed.createComponent(CharacterListComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });
});
