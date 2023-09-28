import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { ENDPOINTS } from '../../constants';
import {
  Superhero,
  SuperheroSearch,
  Superheroes,
} from '../../interfaces/superhero';

@Injectable({
  providedIn: 'root',
})
export class HeroesService {
  private restURL = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  getSuperheroes(pageIndex: number = 0): Observable<Superheroes> {
    const params = { pageIndex: pageIndex };
    return this.http.get<Superheroes>(
      `${this.restURL}/${ENDPOINTS.SUPERHEROES}`,
      { params },
    );
  }

  getSuperheroId(id: number): Observable<Superheroes> {
    return this.http.get<Superheroes>(
      `${this.restURL}/${ENDPOINTS.SUPERHERO}/${id}`,
    );
  }

  getSuperheroSearch(
    search: SuperheroSearch,
    pageIndex: number = 0,
  ): Observable<Superheroes> {
    const queryParams = { ...search, pageIndex };
    return this.http.get<Superheroes>(
      `${this.restURL}/${ENDPOINTS.SUPERHEROES_SEARCH}`,
      {
        params: queryParams,
      },
    );
  }

  deleteSuperhero(id: number): Observable<Superhero> {
    return this.http.delete<Superhero>(
      `${this.restURL}/${ENDPOINTS.SUPERHERO}/${id}`,
    );
  }

  createSuperhero(hero: SuperheroSearch): Observable<Superhero> {
    return this.http.post<Superhero>(
      `${this.restURL}${ENDPOINTS.SUPERHERO}`,
      hero,
    );
  }

  updateSuperhero(hero: SuperheroSearch, id: number): Observable<Superhero> {
    hero.id = id;
    return this.http.put<Superhero>(
      `${this.restURL}${ENDPOINTS.SUPERHERO}/${id}`,
      hero,
    );
  }

  cleanEmptyValues(superheroSearch: SuperheroSearch): SuperheroSearch {
    const cleanedSearch: { [key: string]: unknown } = {} as SuperheroSearch;
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

    const result = cleanedSearch as SuperheroSearch;
    return result;
  }
}
