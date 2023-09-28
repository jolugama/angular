import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslateService } from '@ngx-translate/core';
import { Observable, catchError, finalize, tap } from 'rxjs';
import { LoadingService } from '../loading/loading.service';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
  constructor(
    private loadingService: LoadingService,
    private snackBar: MatSnackBar,
    private translate: TranslateService,
  ) {}
  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler,
  ): Observable<HttpEvent<unknown>> {
    this.loadingService.show();
    return next.handle(request).pipe(
      tap((event: HttpEvent<unknown>) => {
        if (event instanceof HttpResponse) {
          this.loadingService.hide();
        }
      }),
      catchError((err: HttpErrorResponse) => {
        const ups = this.translate.instant('ACTIONS.UPS');
        if (err instanceof HttpErrorResponse && err.status === 404) {
          this.snackBar.open(`🚨 ${ups}`, undefined, {
            duration: 2000,
            verticalPosition: 'top',
          });
        }
        throw err;
      }),
      finalize(() => this.loadingService.hide()),
    );
  }
}
