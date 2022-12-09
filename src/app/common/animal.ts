import { AnimalIndicators } from "./animal-indicators";
import { AnimalType } from "./animal-type";
import { Sex } from "./sex";

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
        public type?: AnimalType,
        public sex?: Sex,
        public indicators?: AnimalIndicators
    ) { }
}
