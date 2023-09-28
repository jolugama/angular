import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { environment } from 'src/environments/environment.development';
import { ENDPOINTS } from '../../constants';
import { HeroesService } from './heroes.service';

describe('HeroesService', () => {
  let service: HeroesService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HeroesService],
    });
    service = TestBed.inject(HeroesService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should fetch superheroes', () => {
    service.getSuperheroes(1).subscribe();
    const req = httpMock.expectOne(
      `${environment.apiBaseUrl}/${ENDPOINTS.SUPERHEROES}?pageIndex=1`,
    );
    expect(req.request.method).toBe('GET');
    req.flush({});
  });

  it('should fetch superhero by id', () => {
    service.getSuperheroId(1).subscribe();
    const req = httpMock.expectOne(
      `${environment.apiBaseUrl}/${ENDPOINTS.SUPERHERO}/${1}`,
    );
    expect(req.request.method).toBe('GET');
    req.flush({});
  });

  it('should perform superhero search', () => {
    service.getSuperheroSearch({ name: 'test' }, 1).subscribe();
    const req = httpMock.expectOne(
      `${environment.apiBaseUrl}/${ENDPOINTS.SUPERHEROES_SEARCH}?name=test&pageIndex=1`,
    );
    expect(req.request.method).toBe('GET');
    req.flush({});
  });

  it('should delete superhero', () => {
    service.deleteSuperhero(1).subscribe();
    const req = httpMock.expectOne(
      `${environment.apiBaseUrl}/${ENDPOINTS.SUPERHERO}/${1}`,
    );
    expect(req.request.method).toBe('DELETE');
    req.flush({});
  });

  it('should create superhero', () => {
    service.createSuperhero({ name: 'test' }).subscribe();
    const req = httpMock.expectOne(
      `${environment.apiBaseUrl}${ENDPOINTS.SUPERHERO}`,
    );
    expect(req.request.method).toBe('POST');
    req.flush({});
  });

  it('should update superhero', () => {
    service.updateSuperhero({ name: 'test' }, 1).subscribe();
    const req = httpMock.expectOne(
      `${environment.apiBaseUrl}${ENDPOINTS.SUPERHERO}/1`,
    );
    expect(req.request.method).toBe('PUT');
    req.flush({});
  });
});
