import { IsNotEmpty } from "class-validator";

export class UserCreateDto{
    @IsNotEmpty()
    firstname: string;

    @IsNotEmpty()
    lastname: string;

    @IsNotEmpty()
    birthdate: Date;

    @IsNotEmpty()
    sex: string;

    @IsNotEmpty()
    username: string;

    @IsNotEmpty()
    password: string;

    @IsNotEmpty()
    password_confirm: string;
}