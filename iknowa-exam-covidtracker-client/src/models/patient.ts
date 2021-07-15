export class Patient {
    constructor(
     public id: string,
     public firstname: string,
     public lastname: string,
     public birthdate: string,
     public address: string,
     public gender: string,
     public temperature: string
    ){}
}