import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Patient } from './models/entities/patient.entity';
import { PATIENTSERVICE_INTERFACE } from './models/interfaces/patientService.interface';
import { PatientController } from './patient.controller';
import { PatientService } from './patient.service';

@Module({
  imports: [TypeOrmModule.forFeature([Patient])],
  controllers: [PatientController],
  providers: [
    {
      provide : PATIENTSERVICE_INTERFACE,
      useClass: PatientService
    }
  ]
})
export class PatientModule {}
