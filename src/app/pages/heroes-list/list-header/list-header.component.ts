import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs';
import {
  Abilities,
  SuperheroSearch,
  Universe,
} from 'src/app/shared/interfaces/superhero';
import { HeroesService } from 'src/app/shared/services/heroes/heroes.service';

@Component({
  selector: 'app-list-header',
  templateUrl: './list-header.component.html',
  styleUrls: ['./list-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListHeaderComponent implements OnInit {
  @Output() updateSearch = new EventEmitter<SuperheroSearch>();
  form!: FormGroup;
  searchText = '';
  universeKeys: string[] = Object.values(Universe).sort((a, b) =>
    a.toLowerCase().localeCompare(b.toLowerCase()),
  );
  abilitiesKeys: string[] = Object.values(Abilities);

  constructor(
    private cdr: ChangeDetectorRef,
    private fb: FormBuilder,
    private heroesService: HeroesService,
  ) {
    this.createForm();
  }

  ngOnInit(): void {
    this.form
      .get('nameControl')!
      .valueChanges.pipe(debounceTime(600), distinctUntilChanged())
      .subscribe(() => {
        this.search();
      });
  }

  onSelectClosed() {
    this.search();
  }

  onDblClick(event: Event): void {
    const input = event.target as HTMLInputElement;
    input.value = '';
    this.searchText = '';
    this.search();
  }

  deleteFilters() {
    Object.keys(this.form.controls).forEach((key) => {
      this.form.get(key)?.setValue('');
    });
    this.search();
  }

  // PRIVATE METHODS

  private createForm(): void {
    this.form = this.fb.group({
      nameControl: [''],
      universeControl: [''],
      abilitiesControl: [''],
    });
  }

  private search(): void {
    const superheroSearch: SuperheroSearch = {
      name: this.form.value.nameControl?.trim().toLowerCase(),
      universe: this.form.value.universeControl,
      abilities: this.form.value.abilitiesControl,
    };

    const heroSearch: SuperheroSearch =
      this.heroesService.cleanEmptyValues(superheroSearch);
    this.updateSearch.emit(heroSearch);
    console.log('Buscando:', heroSearch);
  }
}
