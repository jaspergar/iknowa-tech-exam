import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { User } from 'src/user/models/entities/user.entity';
import { UserServiceInterface, USERSERVICE_INTERFACE } from 'src/user/models/interfaces/userService.interface';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        @Inject(USERSERVICE_INTERFACE) private userServiceInterface : UserServiceInterface,
        private jwtService : JwtService
        ){}

    async validateUser(username: string , password: string) : Promise<any> { 
        try {
            const user = await this.userServiceInterface.findOneByUsername(username);
    
            //check if user exist and user password is correct
            if(user && await bcrypt.compare(password , user.password)){
                //separate the password and username
                //then returns the remaining user data 
                const {password, ...rest} = user;
                return rest;
            }
    
            return null;
        } catch (error) {
            throw new HttpException(error.message , HttpStatus.BAD_REQUEST);
        }       
    }

    async login(user : User) {
        const payload = {...user};
        return {
            access_token: this.jwtService.sign(payload),
        }
    }
}
