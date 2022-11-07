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

  private animalsRequestUrl: string = `${environment.apiBaseUrl}${environment.animalsMappingUrl}`;
  private animalTypesRequestUrl: string = `${environment.apiBaseUrl}${environment.animalTypesMappingUrl}`;

  constructor(private httpClient: HttpClient) { }

  getAnimalList(animalTypeCode: string): Observable<Animal[]> {
    let requestUrl: string;

    if (animalTypeCode.length === 0) {
      requestUrl = `${this.animalsRequestUrl}?size=100`;
    } else {
      requestUrl = `${this.animalsRequestUrl}/findAllByTypeCode?code=${animalTypeCode}&size=100`;
    }

    return this.getAnimals(requestUrl);
  }

  searchAnimals(theSearchKey: string): Observable<Animal[]> {
    const requestUrl: string =
      `${this.animalsRequestUrl}/findAllByNameOrDescriptionContainingIgnoreCase?searchKey=${theSearchKey}`;

    return this.getAnimals(requestUrl);
  }

  getAnimalTypes(): Observable<AnimalType[]> {
    const requestUrl: string =
      `${this.animalTypesRequestUrl}`;

    return this.httpClient.get<AnimalType[]>(requestUrl);
  }

  getAnimal(theAnimalid: number): Observable<Animal> {
    const requestUrl: string = `${this.animalsRequestUrl}/${theAnimalid}`;

    return this.httpClient.get<Animal>(requestUrl);
  }

  private getAnimals(requestUrl: string): Observable<Animal[]> {
    return this.httpClient.get<GetResponse>(requestUrl).pipe(
      map(response => response.content)
    );
  }
}

interface GetResponse {
  content: Animal[];
}
