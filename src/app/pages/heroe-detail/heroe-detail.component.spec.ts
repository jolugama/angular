import { Location } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { HeroeDetailComponent } from './heroe-detail.component';

describe('HeroeDetailComponent', () => {
  let component: HeroeDetailComponent;
  let fixture: ComponentFixture<HeroeDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeroeDetailComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get: () => '12',
              },
            },
          },
        },
        {
          provide: Location,
          useValue: {
            back: jasmine.createSpy('back'),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HeroeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set id from route params', () => {
    expect(component.id).toEqual('12');
  });

  it('should go back', () => {
    const location = TestBed.inject(Location);
    component.goBack();
    expect(location.back).toHaveBeenCalled();
  });
});
