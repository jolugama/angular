import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Superheroes } from '../../interfaces/superhero';

@Injectable({
  providedIn: 'root',
})
export class HeroesService {
  private restURL = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  getSuperheroes(): Observable<Superheroes> {
    return this.http.get<Superheroes>(`${this.restURL}/superheroes`);
  }
}
