import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subject, debounceTime, distinctUntilChanged } from 'rxjs';
import {
  Abilities,
  SuperheroSearch,
  Universe,
} from 'src/app/shared/interfaces/superhero';

@Component({
  selector: 'app-list-header',
  templateUrl: './list-header.component.html',
  styleUrls: ['./list-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListHeaderComponent implements OnInit {
  @Output() updateSearch = new EventEmitter<void>();
  form!: FormGroup;
  private searchTextSubject = new Subject<string>();
  searchText = '';
  universeKeys: string[] = Object.values(Universe);
  abilitiesKeys: string[] = Object.values(Abilities);

  constructor(
    private cdr: ChangeDetectorRef,
    private fb: FormBuilder,
  ) {
    this.createForm();
  }

  ngOnInit() {
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

  onDblClick(event: Event) {
    const input = event.target as HTMLInputElement;
    input.value = '';
    this.searchText = '';
    this.search();
  }

  // PRIVATE METHODS

  private createForm() {
    this.form = this.fb.group({
      nameControl: [''],
      universeControl: [''],
      abilitiesControl: [''],
    });
  }

  private search() {
    const superheroSearch: SuperheroSearch = {
      name: this.form.value.nameControl,
      universe: this.form.value.universeControl,
      abilities: this.form.value.abilitiesControl,
    };

    // Clean empty values
    const cleanedSearch: { [key: string]: unknown } = {};
    Object.keys(superheroSearch).forEach((key) => {
      const value = (superheroSearch as { [key: string]: unknown })[key];
      if (Array.isArray(value)) {
        if (value.length > 0) {
          cleanedSearch[key] = value;
        }
      } else if (value !== null && value !== '') {
        cleanedSearch[key] = value;
      }
    });

    console.log('Buscando:', cleanedSearch);
  }
}
