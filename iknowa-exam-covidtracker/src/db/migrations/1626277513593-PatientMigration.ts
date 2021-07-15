import {MigrationInterface, QueryRunner} from "typeorm";

export class PatientMigration1626277513593 implements MigrationInterface {
    name = 'PatientMigration1626277513593'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `patient` (`id` varchar(36) NOT NULL, `firstname` varchar(50) NOT NULL, `lastname` varchar(50) NOT NULL, `birthdate` datetime NOT NULL, `gender` varchar(50) NOT NULL, `address` varchar(50) NOT NULL, `deleted_at` datetime(6) NULL, `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updateda_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP TABLE `patient`");
    }

}
