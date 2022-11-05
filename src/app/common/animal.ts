export class Animal {

    constructor(
        public name: string,
        public birthDate: Date,
        public description: string,
        public fullBio: string,
        public imageUrl: string,
        public active: boolean,
        public dateCreated: Date,
        public dateUpdated: Date
    ) { }
}