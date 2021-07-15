import {MigrationInterface, QueryRunner} from "typeorm";

export class PatientMigration1626284068521 implements MigrationInterface {
    name = 'PatientMigration1626284068521'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `patient` ADD `temperatur` int NOT NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `patient` DROP COLUMN `temperatur`");
    }

}
