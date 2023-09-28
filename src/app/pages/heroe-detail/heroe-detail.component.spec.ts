import { Location } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { HeroeDetailComponent } from './heroe-detail.component';

class MockParamMap implements ParamMap {
  get(): string | null {
    return '123';
  }
  has(): boolean {
    return true;
  }
  getAll(): string[] {
    return ['123'];
  }
  keys: string[] = ['123'];
}

class MockActivatedRouteSnapshot {
  paramMap = new MockParamMap();
}

class MockActivatedRoute {
  snapshot = new MockActivatedRouteSnapshot();
}

describe('HeroeDetailComponent', () => {
  let component: HeroeDetailComponent;
  let fixture: ComponentFixture<HeroeDetailComponent>;
  let mockLocation: jasmine.SpyObj<Location>;
  let mockActivatedRoute: MockActivatedRoute;

  beforeEach(() => {
    mockLocation = jasmine.createSpyObj(['back']);
    mockActivatedRoute = new MockActivatedRoute();

    TestBed.configureTestingModule({
      declarations: [HeroeDetailComponent],
      providers: [
        { provide: Location, useValue: mockLocation },
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
      ],
      imports: [TranslateModule.forRoot()],
    });

    fixture = TestBed.createComponent(HeroeDetailComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set id from route params on init', () => {
    component.ngOnInit();
    expect(component.id).toEqual('123');
  });

  it('should navigate back when goBack is called', () => {
    component.goBack();
    expect(mockLocation.back).toHaveBeenCalled();
  });

  it('should set id to null if paramMap.get returns null', () => {
    spyOn(mockActivatedRoute.snapshot.paramMap, 'get').and.returnValue(null);
    component.ngOnInit();
    expect(component.id).toBeNull();
  });
});
