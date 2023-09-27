import { ChangeDetectorRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { of } from 'rxjs';
import { Superhero, Universe } from 'src/app/shared/interfaces/superhero';
import { HeroesService } from 'src/app/shared/services/heroes/heroes.service';
import { ListTableComponent } from './list-table.component';

describe('ListTableComponent', () => {
  let component: ListTableComponent;
  let heroesServiceSpy: jasmine.SpyObj<HeroesService>;
  let changeDetectorRefSpy: jasmine.SpyObj<ChangeDetectorRef>;
  let matDialogSpy: jasmine.SpyObj<MatDialog>;

  beforeEach(() => {
    heroesServiceSpy = jasmine.createSpyObj('HeroesService', [
      'deleteSuperhero',
    ]);
    changeDetectorRefSpy = jasmine.createSpyObj('ChangeDetectorRef', [
      'detectChanges',
    ]);
    matDialogSpy = jasmine.createSpyObj('MatDialog', ['open']);
    component = new ListTableComponent(
      changeDetectorRefSpy,
      matDialogSpy,
      heroesServiceSpy,
    );
  });

  it('should call deleteSuperhero service method on deleteItem', () => {
    const hero: Superhero = {
      id: 1,
      name: 'Superman',
      alias: 'mister',
      description: '',
      images: [],
      universe: Universe.Dc,
      abilities: [],
    };

    const mockSuperhero: Superhero = {
      id: 1,
      name: 'batman',
      alias: 'Mock',
      description: 'Mock Description',
      universe: Universe.Dc,
      abilities: [],
    };

    heroesServiceSpy.deleteSuperhero.and.returnValue(of(mockSuperhero));
    component['deleteItem'](hero);

    expect(heroesServiceSpy.deleteSuperhero.calls.count()).toBe(1);

    expect(heroesServiceSpy.deleteSuperhero.calls.first().args[0]).toBe(
      hero.id,
      1,
    );
  });
});
