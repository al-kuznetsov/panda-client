import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Animal } from '../common/animal';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  private baseUrl: string = `${environment.apiBaseUrl}${environment.animalsMappingUrl}`;

  constructor(private httpClient: HttpClient) { }

  getAnimalList(animalTypeCode: string): Observable<Animal[]> {
    let requestUrl: string;

    if (animalTypeCode.length === 0) {
      requestUrl = `${this.baseUrl}?size=100`;
    } else {
      requestUrl = `${this.baseUrl}/findAllByTypeCode?code=${animalTypeCode}&size=100`;
    }

    return this.httpClient.get<GetResponse>(requestUrl).pipe(
      map(response => response.content)
    )
  }
}

interface GetResponse {
  content: Animal[];
}
