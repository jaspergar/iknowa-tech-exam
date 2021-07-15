import { HttpException, HttpStatus, Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import {Strategy} from 'passport-local'
import { User } from "src/user/models/entities/user.entity";
import { AuthService } from "../auth.service";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy){
   constructor(private authService : AuthService) {
       super();
   }

   async validate(username : string , password : string): Promise<User> {
        try {
            const user = await this.authService.validateUser(username,password);
            if(!user){
                throw new UnauthorizedException();
            }
            return user;
        } catch (error) {
            throw new HttpException(error.message , 500)
        }
    }
}