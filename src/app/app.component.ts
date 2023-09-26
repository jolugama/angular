import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'superHero';
  selectedLanguage: string;

  constructor(private translate: TranslateService) {
    this.selectedLanguage = 'en';
    translate.setDefaultLang(this.selectedLanguage);

  }

  switchLanguage(language: string) {
    this.selectedLanguage = language;
    this.translate.use(language);
  }
}
