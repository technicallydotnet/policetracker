import { Crime } from "./crime.model";
import { Sentence } from "./sentence.model";

export class Person{
    constructor(
        public personId?:number,
        public firstName?:string,
        public lastName?:string,
        public crimes?:Crime[],
        public sentences?:Sentence[]
    ){ }
}