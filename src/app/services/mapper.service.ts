import { Injectable } from '@angular/core';
import { Animal } from '../common/animal';
import { AnimalType } from '../common/animal-type';

@Injectable({
  providedIn: 'root'
})
export class MapperService {

  constructor() { }

  mapAnimalType(animalTypeObject: any): AnimalType {

    return new AnimalType(animalTypeObject.id,
      animalTypeObject.code,
      animalTypeObject.name,
      animalTypeObject.description,
      animalTypeObject.imageUrl
    );
  }

  mapAnimal(animalObject: any) {

    return new Animal(animalObject.id,
      animalObject.name,
      animalObject.birthDate,
      animalObject.description,
      animalObject.fullBio,
      animalObject.imageUrl,
      animalObject.active,
      animalObject.dateCreated,
      animalObject.dateUpdated,
      this.mapAnimalType(animalObject.type)
    );
  }
}
