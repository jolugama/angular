import { HttpErrorResponse } from '@angular/common/http';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { tap } from 'rxjs';
import { Paginator } from 'src/app/shared/interfaces/paginator';
import {
  Superhero,
  SuperheroSearch,
} from 'src/app/shared/interfaces/superhero';
import { HeroesService } from 'src/app/shared/services/heroes/heroes.service';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroesListComponent implements OnInit {
  superheroes: Superhero[] = [];
  search: Partial<Superhero> = {};

  paginator!: Paginator;

  constructor(
    private heroesService: HeroesService,
    private cdr: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    const search: SuperheroSearch = {} as SuperheroSearch;
    this.filterHeroes(search);
  }

  onPaginatorChange(event: Paginator): void {
    console.log(event);
    this.filterHeroes(this.search, event.pageIndex);
    this.paginator = event;
  }

  filterHeroes(search: SuperheroSearch, pageIndex: number = 0): void {
    this.search = search;
    this.heroesService
      .getSuperheroSearch(search, pageIndex)
      .pipe(tap((heroes) => console.log(heroes.superheroes)))
      .subscribe({
        next: (heroes) => {
          this.superheroes = heroes.superheroes;
          this.paginator = {
            length: heroes.length,
            pageSize: 5, // heroes.pageSize,
            pageIndex: heroes.pageIndex,
          };
          this.cdr.detectChanges();
        },
        error: (error) => this.handleErrorHeroes(error),
      });
  }

  // PRIVATE METHODS

  private handleErrorHeroes(error: HttpErrorResponse): void {
    this.superheroes = [];
    this.cdr.detectChanges();
    console.error(error);
  }
}
