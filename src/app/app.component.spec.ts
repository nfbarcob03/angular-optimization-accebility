import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';
import { TranslateModule, TranslateService, TranslateLoader } from '@ngx-translate/core';
import { NgOptimizedImage } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { of } from 'rxjs';
// Custom loader for testing
const translations: any = {
  en: {
    title: 'Explore the Multiverse',
    subtitle: 'Discover all the crazy characters from Rick and Morty!',
    'footer-title': 'Rick and Morty Character Explorer',
    'footer-data': 'Data provided by'
  },
  es: {
    title: 'Explora el Multiverso',
    subtitle: '¡Descubre todos los personajes locos de Rick y Morty!',
    'footer-title': 'Explorador de Personajes de Rick y Morty',
    'footer-data': 'Datos proporcionados por'
  },
  fr: {
    title: 'Explorez le Multivers',
    subtitle: 'Découvrez tous les personnages fous de Rick et Morty !',
    'footer-title': 'Explorateur de Personnages Rick et Morty',
    'footer-data': 'Données fournies par'
  }
};

class FakeLoader implements TranslateLoader {
  getTranslation(lang: string) {
    return of(translations[lang] || {});
  }
}

// Mock del CharacterListComponent
@Component({
  selector: 'app-character-list',
  template: '<div>Character List Mock</div>'
})
class MockCharacterListComponent { }

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule,
        TranslateModule.forRoot({
          loader: { provide: TranslateLoader, useClass: FakeLoader }
        }),
        NgOptimizedImage
      ],
      declarations: [
        AppComponent,
        MockCharacterListComponent
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  });

  function setTranslations(service: TranslateService, lang: string, translations: any) {
    service.setTranslation(lang, translations, true);
    service.use(lang);
  }

  it('debe mostrar textos en inglés', async () => {
    const fixture = TestBed.createComponent(AppComponent);
    const translate = TestBed.inject(TranslateService);
    setTranslations(translate, 'en', {
      title: 'Explore the Multiverse',
      subtitle: 'Discover all the crazy characters from Rick and Morty!',
      'footer-title': 'Rick and Morty Character Explorer',
      'footer-data': 'Data provided by'
    });
    fixture.detectChanges();
    await fixture.whenStable();
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Explore the Multiverse');
    expect(compiled.querySelector('.subtitle')?.textContent).toContain('Discover all the crazy characters from Rick and Morty!');
    expect(compiled.querySelector('.footer-text')?.textContent).toContain('Rick and Morty Character Explorer');
    expect(compiled.querySelector('.footer-text')?.textContent).toContain('Data provided by');
  });

  it('debe mostrar textos en español', async () => {
    const fixture = TestBed.createComponent(AppComponent);
    const translate = TestBed.inject(TranslateService);
    setTranslations(translate, 'es', {
      title: 'Explora el Multiverso',
      subtitle: '¡Descubre todos los personajes locos de Rick y Morty!',
      'footer-title': 'Explorador de Personajes de Rick y Morty',
      'footer-data': 'Datos proporcionados por'
    });
    translate.use('es');
    fixture.detectChanges();
    await fixture.whenStable();
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Explora el Multiverso');
    expect(compiled.querySelector('.subtitle')?.textContent).toContain('¡Descubre todos los personajes locos de Rick y Morty!');
    expect(compiled.querySelector('.footer-text')?.textContent).toContain('Explorador de Personajes de Rick y Morty');
    expect(compiled.querySelector('.footer-text')?.textContent).toContain('Datos proporcionados por');
  });

  it('debe mostrar textos en francés', async () => {
    const fixture = TestBed.createComponent(AppComponent);
    const translate = TestBed.inject(TranslateService);
    setTranslations(translate, 'fr', {
      title: 'Explorez le Multivers',
      subtitle: 'Découvrez tous les personnages fous de Rick et Morty !',
      'footer-title': 'Explorateur de Personnages Rick et Morty',
      'footer-data': 'Données fournies par'
    });
    translate.use('fr');
    fixture.detectChanges();
    await fixture.whenStable();
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Explorez le Multivers');
    expect(compiled.querySelector('.subtitle')?.textContent).toContain('Découvrez tous les personnages fous de Rick et Morty !');
    expect(compiled.querySelector('.footer-text')?.textContent).toContain('Explorateur de Personnages Rick et Morty');
    expect(compiled.querySelector('.footer-text')?.textContent).toContain('Données fournies par');
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'angular-sofkau'`, async () => {
    const fixture = TestBed.createComponent(AppComponent);
    const translate = TestBed.inject(TranslateService);
    translate.use('en');
    fixture.detectChanges();
    await fixture.whenStable();
    fixture.detectChanges();
    const app = fixture.componentInstance;
    expect(app.title).toEqual('angular-sofkau');
  });

  it('should render the app structure', async () => {
    const fixture = TestBed.createComponent(AppComponent);
    const translate = TestBed.inject(TranslateService);
    translate.use('en');
    fixture.detectChanges();
    await fixture.whenStable();
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('.app-container')).toBeTruthy();
    expect(compiled.querySelector('.app-header')).toBeTruthy();
    expect(compiled.querySelector('.main-content')).toBeTruthy();
    expect(compiled.querySelector('.app-footer')).toBeTruthy();
  });

  it('should contain character list component', async () => {
    const fixture = TestBed.createComponent(AppComponent);
    const translate = TestBed.inject(TranslateService);
    translate.use('en');
    fixture.detectChanges();
    await fixture.whenStable();
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('app-character-list')).toBeTruthy();
  });

  it('should display footer content', async () => {
    const fixture = TestBed.createComponent(AppComponent);
    const translate = TestBed.inject(TranslateService);
    translate.use('en');
    fixture.detectChanges();
    await fixture.whenStable();
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;

    const footer = compiled.querySelector('.footer-text');
    expect(footer?.textContent).toContain('2025 Rick and Morty Character Explorer');
    expect(footer?.textContent).toContain('The Rick and Morty API');
  });
});

