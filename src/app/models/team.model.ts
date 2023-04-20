export class Team{
    id: number;
    abbrevation:string;
    city:string;
    conferance:string;
    division:string;
    fullname:string;
    name:string;
    constructor(id:number, abbrevation:string, city:string, conferance:string, division:string, fullname:string, name:string,){
        this.id= id;
        this.abbrevation=abbrevation;
        this.city=city;
        this.conferance=conferance;
        this.division=division;
        this.fullname=fullname;
        this.name=name;
        }
}
