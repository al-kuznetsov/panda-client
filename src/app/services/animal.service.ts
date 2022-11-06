import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Animal } from '../common/animal';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  private baseUrl: string = `${environment.apiBaseUrl}${environment.animalsMappingUrl}?size=100`;

  constructor(private httpClient: HttpClient) { }

  getAnimalList(): Observable<Animal[]> {
    return this.httpClient.get<GetResponse>(this.baseUrl).pipe(
      map(response => response.content)
    )
  }
}

interface GetResponse {
  content: Animal[];
}
