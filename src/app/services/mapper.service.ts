import { Injectable } from '@angular/core';
import { Animal } from '../common/animal';
import { AnimalCriteriaContainer } from '../common/animal-criteria-container';
import { AnimalIndicators } from '../common/animal-indicators';
import { AnimalIndicatorsNumeric } from '../common/animal-indicators-numeric';
import { AnimalItem } from '../common/animal-item';
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

  mapAnimalIndicators(animalIndicatorsObject: any): AnimalIndicators {

    return new AnimalIndicators(animalIndicatorsObject.id,
      animalIndicatorsObject.age,
      animalIndicatorsObject.isInfant,
      animalIndicatorsObject.consciousnessLevel,
      animalIndicatorsObject.height,
      animalIndicatorsObject.breathingRate,
      animalIndicatorsObject.heartRate,
      animalIndicatorsObject.bleedingLevel,
      animalIndicatorsObject.bodyTemperature,
      animalIndicatorsObject.severeDamageCount,
      animalIndicatorsObject.mildDamageCount,
      animalIndicatorsObject.mobilityLossLevel,
      animalIndicatorsObject.appetiteLevel,
      animalIndicatorsObject.hasSymptoms,
      animalIndicatorsObject.isPregnant,
      animalIndicatorsObject.aggressionLevel
    )
  }

  mapAnimalIndicatorsNumeric(animalIndicatorsNumericObject: any): AnimalIndicatorsNumeric {

    return new AnimalIndicatorsNumeric(animalIndicatorsNumericObject.id,
      animalIndicatorsNumericObject.age,
      animalIndicatorsNumericObject.isInfant,
      animalIndicatorsNumericObject.consciousnessLevel,
      animalIndicatorsNumericObject.height,
      animalIndicatorsNumericObject.breathingRate,
      animalIndicatorsNumericObject.heartRate,
      animalIndicatorsNumericObject.bleedingLevel,
      animalIndicatorsNumericObject.bodyTemperature,
      animalIndicatorsNumericObject.severeDamageCount,
      animalIndicatorsNumericObject.mildDamageCount,
      animalIndicatorsNumericObject.mobilityLossLevel,
      animalIndicatorsNumericObject.appetiteLevel,
      animalIndicatorsNumericObject.hasSymptoms,
      animalIndicatorsNumericObject.isPregnant,
      animalIndicatorsNumericObject.aggressionLevel
    )
  }

  mapAnimal(animalObject: any): Animal {

    return new Animal(animalObject.id,
      animalObject.name,
      animalObject.birthDate,
      animalObject.description,
      animalObject.fullBio,
      animalObject.imageUrl,
      animalObject.active,
      animalObject.dateCreated,
      animalObject.dateUpdated,
      this.mapAnimalType(animalObject.type),
      this.mapAnimalIndicators(animalObject.indicators)
    );
  }

  mapAnimalItem(animalObject: any): AnimalItem {

    const animal: Animal = new Animal(animalObject.id,
      animalObject.name,
      animalObject.birthDate,
      animalObject.description,
      animalObject.fullBio,
      animalObject.imageUrl,
      animalObject.active,
      animalObject.dateCreated,
      animalObject.dateUpdated,
      this.mapAnimalType(animalObject.type),
      this.mapAnimalIndicators(animalObject.indicators)
    );

    return new AnimalItem(animal);
  }

  mapAnimalCriteriaContainer(anyAnimalCriteriaContainerObject: any): AnimalCriteriaContainer {
    return new AnimalCriteriaContainer(
      anyAnimalCriteriaContainerObject.animal,
      this.mapAnimalIndicatorsNumeric(
        anyAnimalCriteriaContainerObject.animalIndicatorsNumericPreNormalize),
      this.mapAnimalIndicatorsNumeric(
        anyAnimalCriteriaContainerObject.animalIndicatorsNumericPostNormalize),
      this.mapAnimalIndicatorsNumeric(
        anyAnimalCriteriaContainerObject.animalIndicatorsNumericPostWeighing),
      anyAnimalCriteriaContainerObject.criteria
    )
  }
}
