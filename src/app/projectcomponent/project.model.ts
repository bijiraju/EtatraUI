export class ProjectModel{
    constructor(
        public projectName: string,
        public clientName: string,
        public email: string,
        public country: string,
        public state: string,
        public zipcode: number,
        public phone: number,
        public startDate: string,
        public EndDate: string,
        public Duration: number
    ){}
}