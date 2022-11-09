import { Animal } from "./animal";

export class AnimalItem {

    id: number;
    name: string;
    description: string;
    imageUrl: string;

    criteria: number;

    constructor(animal: Animal) {
        this.id = animal.id!;
        this.name = animal.name!;
        this.description = animal.description!;
        this.imageUrl = animal.imageUrl!;

        this.criteria = 1;
    }

}
