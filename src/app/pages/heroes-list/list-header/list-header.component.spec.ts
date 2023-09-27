import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { ListHeaderComponent } from './list-header.component';

describe('ListHeaderComponent', () => {
  let component: ListHeaderComponent;
  let fixture: ComponentFixture<ListHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListHeaderComponent],
      imports: [
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        BrowserAnimationsModule,
        RouterTestingModule,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit search event on nameControl value change', fakeAsync(() => {
    const spy = spyOn(component.updateSearch, 'emit');
    component.form.get('nameControl')!.setValue('superman');
    tick(1600);
    expect(spy).toHaveBeenCalled();
  }));

  it('should call deleteFilters method', () => {
    spyOn(component, 'deleteFilters');
    const button = fixture.debugElement.query(
      By.css('.button-container button:nth-child(2)'),
    );
    button.nativeElement.click();
    fixture.detectChanges();
    expect(component.deleteFilters).toHaveBeenCalled();
  });
});
