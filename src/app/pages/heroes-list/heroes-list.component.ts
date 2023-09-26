import { HttpErrorResponse } from '@angular/common/http';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
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
  displayedColumns: string[] = [
    'name',
    'alias',
    'universe',
    'abilities',
    'edit',
    'delete',
  ];

  paginator: Paginator = {
    length: 0,
    pageSize: 5,
    pageIndex: 0,
  };

  pageEvent!: PageEvent;

  handlePageEvent(e: PageEvent) {
    this.paginator = {
      length: e.length,
      pageSize: e.pageSize,
      pageIndex: e.pageIndex,
      pageEvent: e,
    };
  }

  // setPageSizeOptions(setPageSizeOptionsInput: string) {
  //   if (setPageSizeOptionsInput) {
  //     this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
  //   }
  // }

  constructor(
    private heroesService: HeroesService,
    private cdr: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    // const search: SuperheroSearch = {
    //   name: 'n',
    //   alias: 'ce',
    //   universe: 'DC' as Universe,
    //   abilities: ['intelligence','martial arts training'] as Abilities[],
    // };
    // this.filterHeroes(search);

    this.getHeroes();
  }

  // PRIVATE METHODS

  private handleErrorHeroes(error: HttpErrorResponse) {
    console.error(error);
  }

  private getHeroes() {
    this.heroesService
      .getSuperheroes()
      .pipe(
        tap((heroes) => {
          this.paginator.length = heroes.length;
          this.paginator.pageSize = heroes.pageSize;
          console.log(heroes);
        }),
      )
      .subscribe({
        next: (data) => {
          this.superheroes = data.superheroes;
          this.cdr.detectChanges();
        },
        error: (error) => this.handleErrorHeroes(error),
      });
  }

  private filterHeroes(search: SuperheroSearch) {
    this.heroesService
      .getSuperheroSearch(search)
      .pipe(tap((heroes) => console.log(heroes.superheroes)))
      .subscribe({
        next: (data) => (this.superheroes = data.superheroes),
        error: (error) => this.handleErrorHeroes(error),
      });
  }
}
