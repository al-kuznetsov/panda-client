import { AggressionLevel } from "../enums/aggression-level";
import { AppetiteLevel } from "../enums/appetite-level";
import { BleedingLevel } from "../enums/bleeding-level";
import { ConcsiousnessLevel } from "../enums/concsiousness-level";
import { MobilityLossLevel } from "../enums/mobility-loss-level";

export class AnimalIndicators {

    constructor(
        public id: number,
        public age: number,
        public isInfant: boolean,
        public consciousnessLevel: ConcsiousnessLevel,
        public height: number,
        public breathingRate: number,
        public heartRate: number,
        public bleedingLevel: BleedingLevel,
        public bodyTemperature: number,
        public severeDamageCount: number,
        public mildDamageCount: number,
        public mobilityLossLevel: MobilityLossLevel,
        public appetiteLevel: AppetiteLevel,
        public hasSymptoms: boolean,
        public isPregnant: boolean,
        public aggressionLevel: AggressionLevel
    ) { }
}
