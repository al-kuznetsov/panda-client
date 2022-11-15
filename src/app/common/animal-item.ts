import { Animal } from "./animal";

export class AnimalItem {

    id: number;
    name: string;
    description: string;
    fullBio: string;
    imageUrl: string;
    dateCreated: Date;
    dateUpdated: Date;

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

        this.animalTypeName = animal.animalType?.name!;

        this.criteria = 1;
        this.isAddToCartButtonDisabled = false;
    }

}
