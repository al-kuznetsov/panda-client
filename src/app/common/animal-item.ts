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
        if (animal.animalIndicators === undefined) {
            this.animalIndicators = {} as AnimalIndicators
        } else {
            this.animalIndicators = animal.animalIndicators;
        }

        this.animalTypeName = animal.animalType?.name!;

        this.criteria = 0;
        this.isAddToCartButtonDisabled = false;
    }

}
