import {MigrationInterface, QueryRunner} from "typeorm";

export class PatientMigration1626281140832 implements MigrationInterface {
    name = 'PatientMigration1626281140832'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `temperature` DROP FOREIGN KEY `FK_1fe669b14e316d74d460a492e45`");
        await queryRunner.query("ALTER TABLE `temperature` CHANGE `patientId` `patient_id` varchar(36) NULL");
        await queryRunner.query("ALTER TABLE `temperature` ADD CONSTRAINT `FK_cd7188dfc67afc94af1580540ca` FOREIGN KEY (`patient_id`) REFERENCES `patient`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `temperature` DROP FOREIGN KEY `FK_cd7188dfc67afc94af1580540ca`");
        await queryRunner.query("ALTER TABLE `temperature` CHANGE `patient_id` `patientId` varchar(36) NULL");
        await queryRunner.query("ALTER TABLE `temperature` ADD CONSTRAINT `FK_1fe669b14e316d74d460a492e45` FOREIGN KEY (`patientId`) REFERENCES `patient`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

}
