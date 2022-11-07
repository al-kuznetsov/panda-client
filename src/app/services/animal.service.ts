import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Animal } from '../common/animal';
import { AnimalType } from '../common/animal-type';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  private baseUrl: string = environment.apiBaseUrl;
  private animalsMappingUrl: string = environment.animalsMappingUrl;
  private animalTypesMappingUrl: string = environment.animalTypesMappingUrl;

  constructor(private httpClient: HttpClient) { }

  getAnimalList(animalTypeCode: string): Observable<Animal[]> {
    let requestUrl: string = `${this.baseUrl}${this.animalsMappingUrl}`;

    if (animalTypeCode.length === 0) {
      requestUrl = `${requestUrl}?size=100`;
    } else {
      requestUrl = `${requestUrl}/findAllByTypeCode?code=${animalTypeCode}&size=100`;
    }

    return this.httpClient.get<GetResponse>(requestUrl).pipe(
      map(response => response.content)
    )
  }

  getAnimalTypes(): Observable<AnimalType[]> {
    let requestUrl: string =
      `${this.baseUrl}${environment.animalTypesMappingUrl}`;

    return this.httpClient.get<AnimalType[]>(requestUrl);
  }
}

interface GetResponse {
  content: Animal[];
}
