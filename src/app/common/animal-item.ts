import { Animal } from "./animal";
import { AnimalIndicators } from "./animal-indicators";

export class AnimalItem {

    id: number;
    name: string;
    description: string;
    fullBio: string;
    imageUrl: string;
    dateCreated: Date;
    dateUpdated: Date;
    animalIndicators: AnimalIndicators;

    animalTypeName: string;
    sexName: string;

    criteria: number;
    isAddToCartButtonDisabled: boolean;

    constructor(animal: Animal) {
        this.id = animal.id!;
        this.name = animal.name!;
        this.description = animal.description!;
        this.fullBio = animal.fullBio!;
        this.imageUrl = animal.imageUrl!;
        this.dateCreated = animal.dateCreated!;
        this.dateUpdated = animal.dateUpdated!;
        if (animal.indicators === undefined) {
            this.animalIndicators = {} as AnimalIndicators
        } else {
            this.animalIndicators = animal.indicators;
        }

        if (animal.type === null || animal.type === undefined) {
            this.animalTypeName = "";
        } else {
            this.animalTypeName = animal.type?.name!;
        }
        if (animal.sex === null || animal.sex === undefined) {
            this.sexName = "";
        } else {
            this.sexName = animal.sex?.name!;
        }

        this.criteria = 0;
        this.isAddToCartButtonDisabled = false;
    }

}
