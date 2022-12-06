import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Animal } from '../common/animal';
import { AnimalCriteriaContainer } from '../common/animal-criteria-container';
import { AnimalType } from '../common/animal-type';

@Injectable({
  providedIn: 'root'
})
export class AnimalService {

  private animalsRequestUrl: string = `${environment.apiBaseUrl}${environment.animalsMappingUrl}`;
  private animalTypesRequestUrl: string = `${environment.apiBaseUrl}${environment.animalTypesMappingUrl}`;

  constructor(private httpClient: HttpClient) { }

  getAnimalListPaginate(thePage: number, thePageSize: number, animalTypeCode: string)
    : Observable<GetResponseAnimals> {
    let requestUrl: string;
    const pagingParams: string = `page=${thePage}&size=${thePageSize}`;

    if (animalTypeCode.length === 0) {
      requestUrl = `${this.animalsRequestUrl}?${pagingParams}`;
    } else {
      requestUrl = `${this.animalsRequestUrl}/findAllByTypeCode?code=${animalTypeCode}&${pagingParams}`;
    }

    return this.getAnimals(requestUrl);
  }

  searchAnimalsPaginate(thePage: number, thePageSize: number, theSearchKey: string)
    : Observable<GetResponseAnimals> {
    const requestUrl: string =
      `${this.animalsRequestUrl}/findAllByNameOrDescriptionContainingIgnoreCase`
      + `?searchKey=${theSearchKey}&page=${thePage}&size=${thePageSize}`;

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

  /**
   * Запросить список контейнеров с информацией о расчете глобальных критериев для 
   * переданного списка идентификаторов животных.
   * @param theIds список идентификаторов животных
   * @returns массив контейнеров с расчетом глобальных критериев
   */
  getAnimalCriteriaContainers(theIds: number[]): Observable<AnimalCriteriaContainer[]> {

    const requestUrl: string = `${this.animalsRequestUrl}/calculateCriteriaVector`;

    return this.httpClient.post<AnimalCriteriaContainer[]>(requestUrl, theIds);
  }

  private getAnimals(requestUrl: string): Observable<GetResponseAnimals> {
    return this.httpClient.get<GetResponseAnimals>(requestUrl).pipe(
      map(response => response)
    );
  }
}

interface GetResponseAnimals {
  content: Animal[],
  totalPages: number,
  totalElements: number,
  size: number,
  number: number
}