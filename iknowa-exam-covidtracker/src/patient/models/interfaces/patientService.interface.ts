import { PatientCreateDto } from "../dto/patient-create.dto";
import { PatientUpdateDto } from "../dto/patient-update.dto";
import { Patient } from "../entities/patient.entity";


export const PATIENTSERVICE_INTERFACE = 'PATIENT SERVICE INTERFACE';

export interface PatientServiceInterface{
    all(): Promise<Patient[]>;
    findOneById(id : string): Promise<Patient>;
    create(patientDto : PatientCreateDto) : Promise<Patient>;
    update(id: string , data : PatientUpdateDto) : Promise<Patient>;
    deleteOne(id : string | number) : Promise<Patient>;
    delete(id : string) : Promise<Patient>;
}