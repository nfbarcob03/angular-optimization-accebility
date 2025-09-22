import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { provideTranslateHttpLoader } from '@ngx-translate/http-loader';
// No longer needed: HttpLoaderFactory
import { NgOptimizedImage } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharacterListComponent } from './components/character-list/character-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CharacterListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgOptimizedImage,
    TranslateModule.forRoot(),
  ],
  providers: [
    ...provideTranslateHttpLoader({ prefix: './assets/i18n/', suffix: '.json' })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
