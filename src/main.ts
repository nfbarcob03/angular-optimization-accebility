import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';

import { AppModule } from './app/app.module';

// Ensure development mode for Angular DevTools
if (typeof window !== 'undefined' && (window as any).ng) {
  (window as any).ng.enableDebugTools = true;
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
