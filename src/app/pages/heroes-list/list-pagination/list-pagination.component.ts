import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Paginator } from 'src/app/shared/interfaces/paginator';

@Component({
  selector: 'app-list-pagination',
  templateUrl: './list-pagination.component.html',
  styleUrls: ['./list-pagination.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListPaginationComponent {
  @Input() paginator!: Paginator;
  @Output() paginatorChange = new EventEmitter<Paginator>();

  pageEvent!: PageEvent;

  constructor(private cdr: ChangeDetectorRef) {}

  handlePageEvent(e: PageEvent) {
    this.paginator = {
      length: e.length,
      pageSize: e.pageSize,
      pageIndex: e.pageIndex,
      pageEvent: e,
    };
    this.paginatorChange.emit(this.paginator);
  }
}
