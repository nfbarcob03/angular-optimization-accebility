
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppModule } from './app/app.module';

const supportedLocales = ['en', 'es', 'fr'];
const browserLang = navigator.language.split('-')[0];
const defaultLocale = supportedLocales.includes(browserLang) ? browserLang : 'en';

// Redirigir si la ruta no tiene prefijo de idioma
const currentPath = window.location.pathname;
const pathLocale = currentPath.split('/')[1];
if (!supportedLocales.includes(pathLocale) && defaultLocale !== 'en') {
  window.location.replace(`/${defaultLocale}${currentPath}`);
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
