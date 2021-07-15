import { Body, Controller, Delete, Get, Inject, Param, Post, Put, Query } from '@nestjs/common';
import { PatientCreateDto } from './models/dto/patient-create.dto';
import { PatientUpdateDto } from './models/dto/patient-update.dto';
import { Patient } from './models/entities/patient.entity';
import { PatientServiceInterface, PATIENTSERVICE_INTERFACE } from './models/interfaces/patientService.interface';
import { PatientService } from './patient.service';

@Controller('patient')
export class PatientController {
    constructor(@Inject(PATIENTSERVICE_INTERFACE) private readonly patientServiceInterface : PatientServiceInterface){}

    @Get()
    async all() : Promise<Patient[]> {
        return this.patientServiceInterface.all();
    }

    @Get(':id')
    async findOneById(@Param('id') id : string): Promise<Patient> {
        const user = await this.patientServiceInterface.findOneById(id)
        return user;
    }

    @Post()
    async createPatient(@Body() body : PatientCreateDto) : Promise<Patient> {
        return this.patientServiceInterface.create(body);
    }

    @Put()
    async updatePatient(@Query('id') id : string , @Body() data : PatientUpdateDto) : Promise<Patient> {
        return this.patientServiceInterface.update(id , data);
    }

    @Delete(':id')
    async deletePatient(@Param('id') id : string) : Promise<Patient> {
       return this.patientServiceInterface.delete(id);
    }
}
