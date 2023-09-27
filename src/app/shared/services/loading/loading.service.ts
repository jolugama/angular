import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, distinctUntilChanged } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  private loadingSubject = new BehaviorSubject<boolean>(false);

  loading$: Observable<boolean> = this.loadingSubject
    .asObservable()
    .pipe(distinctUntilChanged());

  show() {
    // workaround to avoid ExpressionChangedAfterItHasBeenCheckedError ;(
    setTimeout(() => {
      this.loadingSubject.next(true);
    }, 0);
  }

  hide() {
    this.loadingSubject.next(false);
  }
}
