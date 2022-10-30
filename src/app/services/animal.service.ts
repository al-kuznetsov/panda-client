import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Animal } from '../common/animal';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  private baseUrl: string = `${environment.apiBaseUrl}${environment.animalsMappingUrl}`;

  constructor(private httpClient: HttpClient) { }

  getAnimalList(): Observable<Animal[]> {
    return this.httpClient.get<Animal[]>(this.baseUrl);
  }
}
