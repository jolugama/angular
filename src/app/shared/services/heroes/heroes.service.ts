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

  // getSuperheroes(): Observable<Superheroes> {
  //   return this.http.get<Superheroes>(`${this.restURL}/${ENDPOINTS.SUPERHEROES}`);
  // }

  getSuperheroes(pageIndex: number = 0): Observable<Superheroes> {
    const params = { pageIndex: pageIndex };
    return this.http.get<Superheroes>(
      `${this.restURL}/${ENDPOINTS.SUPERHEROES}`,
      { params },
    );
  }

  getSuperheroId(id: number): Observable<Superhero> {
    return this.http.get<Superhero>(
      `${this.restURL}/${ENDPOINTS.SUPERHERO}/${id}`,
    );
  }

  getSuperheroSearch(params: SuperheroSearch): Observable<Superheroes> {
    return this.http.get<Superheroes>(
      `${this.restURL}/${ENDPOINTS.SUPERHEROES_SEARCH}`,
      {
        params,
      },
    );
  }

  deleteSuperhero(id: number): Observable<Superhero> {
    return this.http.delete<Superhero>(
      `${this.restURL}/${ENDPOINTS.SUPERHERO}/${id}`,
    );
  }
}
