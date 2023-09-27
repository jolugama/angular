import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { LoadingService } from './shared/services/loading/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements AfterViewInit {
  title = 'superHero';
  selectedLanguage: string;
  loading$: Observable<boolean>;

  constructor(
    private translate: TranslateService,
    private loadingService: LoadingService,
    private cdr: ChangeDetectorRef,
  ) {
    this.selectedLanguage = 'en';
    translate.setDefaultLang(this.selectedLanguage);

    // TODO: move to new component loading
    this.loading$ = this.loadingService.loading$;
  }

  ngAfterViewInit() {
    this.cdr.detectChanges();
  }

  switchLanguage(language: string) {
    this.selectedLanguage = language;
    this.translate.use(language);
  }
}
