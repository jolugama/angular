import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroeEditComponent } from './heroe-edit.component';

describe('HeroeEditComponent', () => {
  let component: HeroeEditComponent;
  let fixture: ComponentFixture<HeroeEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeroeEditComponent],
    });
    fixture = TestBed.createComponent(HeroeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
