import { PageEvent } from '@angular/material/paginator';

export interface Paginator {
  length: number;
  pageSize: number;
  pageIndex: number;
  pageEvent?: PageEvent;
}
