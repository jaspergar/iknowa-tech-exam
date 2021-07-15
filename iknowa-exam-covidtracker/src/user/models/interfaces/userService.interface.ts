import { UserCreateDto } from "../dto/user-create.dto";
import { User } from "../entities/user.entity";



// creating a constant
// Since JavaScript doesn’t support/understand interfaces, 
// when we compile down our TypeScript to JavaScript our interfaces no longer exist.
// To use dependency injection with interfaces we need to create a token to associate with an interface
// and provide that token when injecting to an interface type.
export const USERSERVICE_INTERFACE = 'USER SERVICE INTERFACE';

export interface UserServiceInterface{
    findAllUser(): Promise<User[]>;
    findOneById(id : string): Promise<User>;
    findOneByUsername(username : string) : Promise<User | undefined>;
    register(userCreateDto: UserCreateDto): Promise<User>;
}