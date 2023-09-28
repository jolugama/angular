import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { TranslateModule } from '@ngx-translate/core';
import { Abilities, Universe } from 'src/app/shared/interfaces/superhero';
import { HeroesService } from 'src/app/shared/services/heroes/heroes.service';
import { ListHeaderComponent } from './list-header.component';

describe('ListHeaderComponent', () => {
  let component: ListHeaderComponent;
  let fixture: ComponentFixture<ListHeaderComponent>;
  let heroesService: jasmine.SpyObj<HeroesService>;

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('HeroesService', ['cleanEmptyValues']);
    spy.cleanEmptyValues.and.returnValue();
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        MatFormFieldModule,
        TranslateModule.forRoot(),
      ],
      declarations: [ListHeaderComponent],
      providers: [{ provide: HeroesService, useValue: spy }],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(ListHeaderComponent);
    component = fixture.componentInstance;
    heroesService = TestBed.inject(
      HeroesService,
    ) as jasmine.SpyObj<HeroesService>;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit search event with hero search object on form value change', () => {
    spyOn(component.updateSearch, 'emit');
    component.form.controls['nameControl'].setValue('Superman');
    expect(component.updateSearch.emit).toHaveBeenCalledWith({
      name: 'superman',
      universe: Universe.Dc,
      abilities: [Abilities.AdvancedTechnology],
    });
  });

  it('should handle double click event', () => {
    const event = {
      target: document.createElement('input'),
    };
    event.target.value = 'test';
    component.onDblClick(event as any);
    expect(event.target.value).toEqual('');
  });

  it('should handle delete filters', () => {
    component.form.controls['nameControl'].setValue('Superman');
    component.form.controls['universeControl'].setValue('DC');
    component.form.controls['abilitiesControl'].setValue('Fly');
    component.deleteFilters();
    expect(component.form.value).toEqual({
      nameControl: '',
      universeControl: '',
      abilitiesControl: '',
    });
  });

  it('should call cleanEmptyValues method of heroesService on search', () => {
    component['createForm']();
    component.form.controls['nameControl'].setValue('Superman');
    component['search']();
    expect(heroesService.cleanEmptyValues).toHaveBeenCalled();
  });
});
