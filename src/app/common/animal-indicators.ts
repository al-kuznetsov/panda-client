export class AnimalIndicators {

    constructor(
        public id: number,
        public ag: number,
        public isInfant: boolean,
        public consciousnessLevel: string,
        public height: number,
        public breathingRate: number,
        public heartRate: number,
        public bleedingLevel: string,
        public bodyTemperature: number,
        public severeDamageCount: number,
        public mildDamageCount: number,
        public mobilityLossLevel: string,
        public appetiteLevel: string,
        public hasSymptoms: boolean,
        public isPregnant: boolean,
        public aggressionLevel: string
    ) { }
}
