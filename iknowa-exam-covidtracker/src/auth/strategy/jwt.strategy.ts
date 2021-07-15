import { Inject, Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { UserServiceInterface, USERSERVICE_INTERFACE } from "src/user/models/interfaces/userService.interface";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
     constructor( @Inject(USERSERVICE_INTERFACE) private userServiceInterface : UserServiceInterface){
         //actual validation
         super({
             jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
             ignoreExpiration: false, //makes sure that the token is not expired
             secretOrKey: 'SECRET' // TODO : Add key to env
         })
     }

     async validate(payload: any){
         const user = await this.userServiceInterface.findOneById(payload.id)
         const {password , ...rest} = user
         return rest
     }
}