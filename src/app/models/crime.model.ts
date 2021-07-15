import { Person } from "./person.model";

export class Crime{
    constructor(
        public crimeId?:number,
        public name?:string,
        public date?:string,
        public location?:string,
        public victimName?:string,
        public persons?:Person[]){}
}