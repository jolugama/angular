import { HttpErrorResponse } from '@angular/common/http';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { tap } from 'rxjs';
import { Superhero } from 'src/app/shared/interfaces/superhero';
import { HeroesService } from 'src/app/shared/services/heroes/heroes.service';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroesListComponent {
  superheroes: Superhero[] = [];
  constructor(private heroesService: HeroesService) {}

  ngOnInit(): void {
    this.heroesService
      .getSuperheroes()
      .pipe(tap((heroes) => console.log(heroes.superheroes)))
      .subscribe({
        next: (data) => (this.superheroes = data.superheroes),
        error: (error) => this.handleErrorHeroes(error),
      });
  }

  handleErrorHeroes(error: HttpErrorResponse) {
    console.error(error);
  }
}
