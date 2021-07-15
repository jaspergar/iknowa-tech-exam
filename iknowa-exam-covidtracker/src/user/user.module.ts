import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './models/entities/user.entity';
import { USERSERVICE_INTERFACE } from './models/interfaces/userService.interface';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [TypeOrmModule.forFeature([User])], 
  controllers: [UserController],
  providers: [
    {
      provide : USERSERVICE_INTERFACE,
      useClass: UserService
    }
  ],
  exports: [USERSERVICE_INTERFACE]
})
export class UserModule {}
