import { Animal } from "./animal";

export class AnimalItem {

    id: number;
    name: string;
    imageUrl: string;

    criteria: number;
    quantity: number;

    constructor(animal: Animal) {
        this.id = animal.id!;
        this.name = animal.name!;
        this.imageUrl = animal.imageUrl!;

        this.criteria = 1;
        this.quantity = 1;
    }

}
