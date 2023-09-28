import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { LoadingService } from '../loading/loading.service';
import { LoadingInterceptor } from './loading.interceptor';

describe('LoadingInterceptor', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let loadingService: LoadingService;
  let translateService: TranslateService;
  let snackBar: MatSnackBar;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        MatSnackBarModule,
        TranslateModule.forRoot(),
      ],
      providers: [
        LoadingService,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: LoadingInterceptor,
          multi: true,
        },
      ],
    });

    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    loadingService = TestBed.inject(LoadingService);
    translateService = TestBed.inject(TranslateService);
    snackBar = TestBed.inject(MatSnackBar);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should show and hide loading', () => {
    spyOn(loadingService, 'show');
    spyOn(loadingService, 'hide');

    httpClient.get('/data').subscribe();

    const req = httpTestingController.expectOne('/data');
    req.flush({});

    expect(loadingService.show).toHaveBeenCalled();
    expect(loadingService.hide).toHaveBeenCalled();
  });

  it('should handle 404 error', () => {
    spyOn(translateService, 'instant').and.returnValue('UPS');
    spyOn(snackBar, 'open');

    httpClient.get('/data').subscribe({
      next: () => fail('should have failed with 404 error'),
      error: (error) => expect(error.status).toEqual(404),
    });

    const req = httpTestingController.expectOne('/data');
    req.flush('404 error', { status: 404, statusText: 'Not Found' });

    expect(translateService.instant).toHaveBeenCalledWith('ACTIONS.UPS');
    expect(snackBar.open).toHaveBeenCalledWith('🚨 UPS', undefined, {
      duration: 2000,
      verticalPosition: 'top',
    });
  });

  it('should call loadingService.show on request', () => {
    spyOn(loadingService, 'show');
    httpClient.get('/data').subscribe();
    const req = httpTestingController.expectOne('/data');
    req.flush({});
    expect(loadingService.show).toHaveBeenCalled();
  });

  it('should call loadingService.hide on successful response', () => {
    spyOn(loadingService, 'hide');
    httpClient.get('/data').subscribe();
    const req = httpTestingController.expectOne('/data');
    req.flush({});
    expect(loadingService.hide).toHaveBeenCalled();
  });

  it('should call loadingService.hide on non-404 error', () => {
    spyOn(loadingService, 'hide');
    httpClient.get('/data').subscribe({
      next: () => {},
      error: () => {},
    });

    const req = httpTestingController.expectOne('/data');
    req.flush('error', { status: 500, statusText: 'Internal Server Error' });
    expect(loadingService.hide).toHaveBeenCalled();
  });

  it('should not call snackBar.open on non-404 error', () => {
    spyOn(snackBar, 'open');
    httpClient.get('/data').subscribe({
      next: () => {},
      error: () => {},
    });

    const req = httpTestingController.expectOne('/data');
    req.flush('error', { status: 500, statusText: 'Internal Server Error' });
    expect(snackBar.open).not.toHaveBeenCalled();
  });
});
