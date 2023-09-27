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

  paginator!: Paginator;

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

  onPaginatorChange(event: Paginator) {
    console.log(event);
    this.getHeroes(event.pageIndex);
    this.paginator = event;
  }

  getHeroes(pageIndex: number = 0) {
    this.heroesService
      .getSuperheroes(pageIndex)
      .pipe(tap((heroes) => console.log(heroes)))
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

  private handleErrorHeroes(error: HttpErrorResponse) {
    console.error(error);
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
