import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-sofkau';
  currentLang = 'en';

  constructor(private translate: TranslateService) {
  const browserLang = translate.getBrowserLang() || 'en';
  const supported = ['en', 'es', 'fr'];
  this.currentLang = supported.includes(browserLang) ? browserLang : 'en';
  translate.addLangs(supported);
  translate.setDefaultLang('en');
  translate.use(this.currentLang);
  }

  onLangChange(event: Event) {
    const select = event.target as HTMLSelectElement;
    const lang = select.value;
    if (lang !== this.currentLang) {
      this.currentLang = lang;
      this.translate.use(lang);
    }
  }
}
