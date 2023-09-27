import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateService } from '@ngx-translate/core';
import { of } from 'rxjs';
import { AppComponent } from './app.component';
import { LoadingService } from './shared/services/loading/loading.service';

class MockLoadingService {
  loading$ = of(false);
}

class MockTranslateService {
  use() {}
  setDefaultLang() {}
}

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let translateService: TranslateService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [RouterTestingModule],
      providers: [
        { provide: LoadingService, useClass: MockLoadingService },
        { provide: TranslateService, useClass: MockTranslateService },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    translateService = TestBed.inject(TranslateService);
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should have as title "superHero"', () => {
    expect(component.title).toEqual('superHero');
  });

  it('should switch language', () => {
    spyOn(translateService, 'use');
    component.switchLanguage('es');
    expect(component.selectedLanguage).toEqual('es');
    expect(translateService.use).toHaveBeenCalledWith('es');
  });
});
