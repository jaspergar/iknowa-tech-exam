import { IsEmail, IsNotEmpty } from "class-validator";

export class PatientCreateDto{
    @IsNotEmpty()
    firstname: string;

    @IsNotEmpty()
    lastname: string;

    @IsNotEmpty()
    birthdate: Date;

    @IsNotEmpty()
    gender: string;

    @IsNotEmpty()
    address: string;
 
    @IsNotEmpty()
    temperature : number;
}