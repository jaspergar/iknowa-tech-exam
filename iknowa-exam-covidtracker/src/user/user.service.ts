import { BadRequestException, HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserCreateDto } from './models/dto/user-create.dto';
import { User } from './models/entities/user.entity';
import * as bcrypt from 'bcrypt';
import { UserServiceInterface } from './models/interfaces/userService.interface';

@Injectable()
export class UserService implements UserServiceInterface{
    constructor(@InjectRepository(User) private readonly userRepository: Repository<User>){}
  
    async findAllUser(): Promise<User[]> {
        try {
            return this.userRepository.find();
        } catch (error) {
            throw new HttpException(error.message , HttpStatus.REQUEST_TIMEOUT);
        }
    }
    async findOneById(id : string): Promise<User>{
        try{
            const user = await this.userRepository.findOneOrFail(id);
            return user;
        }
        catch(err){ 
          throw new NotFoundException(`No data found in id ${id}`)
        }
      }

    async findOneByUsername(username : string) : Promise<User | undefined> {
        try {
            const users = await this.findAllUser();
            const user = users.find(user => user.username === username);
            return user;
        } catch (err) {
            throw new HttpException(err.message , 500);
        }
    }

    //register user
    async register(userCreateDto: UserCreateDto): Promise<User> {
        try {
        if(userCreateDto.password === userCreateDto.password_confirm){
            const hashed = await bcrypt.hash(userCreateDto.password, 12);
            userCreateDto.password = hashed;
    
            const newUser = this.userRepository.create({...userCreateDto});
            
            return  this.userRepository.save(newUser);
        }else{
        throw new BadRequestException('Password do not match');
        }
        } catch (err) {
            throw new HttpException(err.message , 500);
        }
    }

 
  
}
