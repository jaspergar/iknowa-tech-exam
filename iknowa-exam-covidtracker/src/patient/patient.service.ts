import { HttpException, HttpStatus, Injectable, NotAcceptableException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PatientCreateDto } from './models/dto/patient-create.dto';
import { PatientUpdateDto } from './models/dto/patient-update.dto';
import { Patient } from './models/entities/patient.entity';
import { PatientServiceInterface } from './models/interfaces/patientService.interface';
import { TypeOrmQueryService } from '@nestjs-query/query-typeorm';

@Injectable()
export class PatientService extends TypeOrmQueryService<Patient> implements PatientServiceInterface{
    constructor(
        @InjectRepository(Patient) private patientRepository : Repository<Patient>
        ){
            // pass the use soft delete option to the service.
            super(patientRepository, { useSoftDelete: true });
        }

    //get all patient
    async all(): Promise<Patient[]> {
        try{
           return this.patientRepository.find();
        }
        catch(err){
            throw new HttpException(err.message , HttpStatus.REQUEST_TIMEOUT);
        }
    }
    
    async findOneById(id : string): Promise<Patient>{
        try{
            const user = await this.patientRepository.findOneOrFail(id);
            return user;
        }
        catch(err){ 
          throw new NotFoundException(`No data found in id ${id}`)
        }
      }
    
    async create(patientDto : PatientCreateDto) : Promise<Patient> {
        try{
            const newPatient = this.patientRepository.create({...patientDto});
            return this.patientRepository.save(newPatient);
        }
        catch(err){
            throw new HttpException(err.message , HttpStatus.REQUEST_TIMEOUT);
        }
     }

     async update(id: string , patientUpdateDto : PatientUpdateDto) : Promise<Patient>{
        try{
            const patient = await this.findOneById(id);
            
            patient.firstname = patientUpdateDto.firstname
            patient.lastname = patientUpdateDto.lastname
            patient.birthdate = patientUpdateDto.birthdate
            patient.gender = patientUpdateDto.gender
            patient.address = patientUpdateDto.address
 
            return this.patientRepository.save(patient);
        }
        catch(err){
            throw new HttpException(err.message , HttpStatus.REQUEST_TIMEOUT);
        }
     }

     async delete(id : string ) : Promise<Patient> {
         try {
            const user = await this.findOneById(id);
            console.log(user.temperature)
            if(user.temperature >= 41){
              throw new HttpException("Cannot delete 41 and above temperature",HttpStatus.BAD_REQUEST);
            }
            return await this.deleteOne(id);
         } catch (error) {
            throw new HttpException(error.message , HttpStatus.REQUEST_TIMEOUT);
         }
         
     }
}
