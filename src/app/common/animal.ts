import { AnimalIndicators } from "./animal-indicators";
import { AnimalType } from "./animal-type";

export class Animal {

    constructor(
        public id?: number,
        public name?: string,
        public birthDate?: Date,
        public description?: string,
        public fullBio?: string,
        public imageUrl?: string,
        public active?: boolean,
        public dateCreated?: Date,
        public dateUpdated?: Date,
        public animalType?: AnimalType,
        public animalIndicators?: AnimalIndicators
    ) { }
}
