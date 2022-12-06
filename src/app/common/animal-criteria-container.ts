import { Animal } from "./animal";
import { AnimalIndicatorsNumeric } from "./animal-indicators-numeric";

export class AnimalCriteriaContainer {

    constructor(
        public animal: Animal,
        public animalIndicatorsNumericPreNormalize: AnimalIndicatorsNumeric,
        public animalIndicatorsNumericPostNormalize: AnimalIndicatorsNumeric,
        public animalIndicatorsNumericPostWeighing: AnimalIndicatorsNumeric,
        public criteria: number
    ) { }
}
