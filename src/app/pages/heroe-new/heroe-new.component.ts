import { Location } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  Abilities,
  SuperheroSearch,
  Universe,
} from 'src/app/shared/interfaces/superhero';
import { HeroesService } from 'src/app/shared/services/heroes/heroes.service';

@Component({
  selector: 'app-heroe-new',
  templateUrl: './heroe-new.component.html',
  styleUrls: ['./heroe-new.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroeNewComponent {
  constructor(
    private location: Location,
    private fb: FormBuilder,
    private heroesService: HeroesService,
  ) {}

  goBack() {
    this.location.back();
  }
  newForm!: FormGroup;

  abilities = Object.values(Abilities).sort((a, b) =>
    a.toLowerCase().localeCompare(b.toLowerCase()),
  );
  universes = Object.values(Universe);

  ngOnInit(): void {
    this.newForm = this.fb.group({
      name: ['', Validators.required],
      alias: [''],
      description: ['', Validators.required],
      universe: ['', Validators.required],
      abilities: ['', Validators.required],
      firstAppearance: [''],
      teams: [''],
    });
  }

  onSubmit(): void {
    console.log(this.newForm.value);
    let heroSearch: SuperheroSearch = this.newForm.value as SuperheroSearch;
    heroSearch.teams =
      typeof heroSearch.teams === 'string'
        ? (heroSearch.teams as string).split(',')
        : heroSearch.teams;
    heroSearch = this.heroesService.cleanEmptyValues(
      heroSearch as SuperheroSearch,
    );
    this.heroesService.createSuperhero(heroSearch).subscribe({
      next: (hero) => {
        console.log('creado!!!');
        this.goBack();
      },
      error: (error) => console.error(error),
    });
  }
}
