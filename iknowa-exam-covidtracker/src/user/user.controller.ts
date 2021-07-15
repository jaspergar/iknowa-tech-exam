import { Body, ClassSerializerInterceptor, Controller, Get, Inject, Param, Post, Query, UseInterceptors } from '@nestjs/common';
import { UserCreateDto } from './models/dto/user-create.dto';
import { User } from './models/entities/user.entity';
import { UserServiceInterface, USERSERVICE_INTERFACE } from './models/interfaces/userService.interface';

@UseInterceptors(ClassSerializerInterceptor) //Interceptor to remove excluded entity (Password)
@Controller('users')
export class UserController {
  constructor(@Inject(USERSERVICE_INTERFACE) private readonly userServiceInterface : UserServiceInterface){}
  
  @Get(':id')
  async findOneById(@Param('id') id : string): Promise<User | undefined> {
     const user = await this.userServiceInterface.findOneById(id)
     return user;
  }

  @Get()
  async findOne(@Query('username') username : string): Promise<User | undefined> {
     const user = await this.userServiceInterface.findOneByUsername(username)
     return user;
  }

  @Post('register')
   async register(@Body() body : UserCreateDto) : Promise<User> {
       return this.userServiceInterface.register(body);
   }
}
