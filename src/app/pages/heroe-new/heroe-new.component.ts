import { Location } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import {
  Abilities,
  SuperheroSearch,
  Universe,
} from 'src/app/shared/interfaces/superhero';
import { HeroesService } from 'src/app/shared/services/heroes/heroes.service';
import { ConfirmationNewComponent } from './confirmation-new/confirmation-new.component';

@Component({
  selector: 'app-heroe-new',
  templateUrl: './heroe-new.component.html',
  styleUrls: ['./heroe-new.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroeNewComponent {
  @Input() isNew = true;
  id: string | null = null;

  constructor(
    private location: Location,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private heroesService: HeroesService,
    private dialog: MatDialog,
    private translate: TranslateService,
  ) {}

  newForm!: FormGroup;

  abilities = Object.values(Abilities).sort((a, b) =>
    a.toLowerCase().localeCompare(b.toLowerCase()),
  );
  universes = Object.values(Universe);

  ngOnInit(): void {
    this.createForm();
    if (!this.isNew) {
      this.fillForm();
    }
  }

  goBack(): void {
    this.location.back();
  }

  private fillForm(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);
    if (this.id && Number(this.id) > 0) {
      this.heroesService.getSuperheroId(Number(this.id)).subscribe({
        next: (hero) => {
          this.newForm.patchValue(hero.superheroes[0]);
        },
        error: (error) => {
          console.error(error);
        },
      });
    }
  }

  private createForm(): void {
    this.newForm = this.fb.group({
      name: ['', Validators.required],
      alias: [''],
      description: ['', Validators.required],
      universe: ['', Validators.required],
      abilities: ['', Validators.required],
      firstAppearance: [''],
      teams: [''],
      images: [''],
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
    if (this.isNew) {
      this.submitNewHero(heroSearch);
    } else {
      this.submitUpdateHero(heroSearch);
    }
  }

  private submitUpdateHero(heroSearch: SuperheroSearch) {
    this.heroesService.updateSuperhero(heroSearch, Number(this.id)).subscribe({
      next: () => {
        const dialogRef = this.dialog.open(ConfirmationNewComponent, {
          data: {
            title: this.translate.instant('UPDATE.TITLE'),
            message: this.translate.instant('UPDATE.MESSAGE'),
            isNew: this.isNew,
          },
        });
        dialogRef.afterClosed().subscribe((result) => {
          if (result) {
            this.goBack();
          }
        });
      },
      error: () => {
        const dialogRef = this.dialog.open(ConfirmationNewComponent, {
          data: {
            title: this.translate.instant('UPDATE_ERROR.TITLE'),
            message: this.translate.instant('UPDATE_ERROR.MESSAGE'),
            isNew: this.isNew,
          },
        });
        dialogRef.afterClosed().subscribe((result) => {
          if (result) {
            this.goBack();
          }
        });
      },
    });
  }

  private submitNewHero(heroSearch: SuperheroSearch) {
    this.heroesService.createSuperhero(heroSearch).subscribe({
      next: () => {
        const dialogRef = this.dialog.open(ConfirmationNewComponent, {
          data: {
            title: this.translate.instant('NEW.TITLE'),
            message: this.translate.instant('NEW.MESSAGE'),
            question: this.translate.instant('NEW.QUESTION'),
            isNew: this.isNew,
          },
        });
        dialogRef.afterClosed().subscribe((result) => {
          if (result) {
            this.goBack();
          } else {
            this.newForm.reset();
          }
        });
      },
      error: () => {
        const dialogRef = this.dialog.open(ConfirmationNewComponent, {
          data: {
            title: this.translate.instant('NEW_ERROR.TITLE'),
            message: this.translate.instant('NEW_ERROR.MESSAGE'),
            question: this.translate.instant('NEW_ERROR.QUESTION'),
            isNew: this.isNew,
          },
        });
        dialogRef.afterClosed().subscribe((result) => {
          if (result) {
            this.goBack();
          }
        });
      },
    });
  }
}
