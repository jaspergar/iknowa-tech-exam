import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from 'ormconfig';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { CommonModule } from './common/jwt-common.module';
import { PatientModule } from './patient/patient.module';

@Module({
  imports: [TypeOrmModule.forRoot(config),UserModule, AuthModule, CommonModule, PatientModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
