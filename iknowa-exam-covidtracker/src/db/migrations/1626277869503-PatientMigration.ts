import {MigrationInterface, QueryRunner} from "typeorm";

export class PatientMigration1626277869503 implements MigrationInterface {
    name = 'PatientMigration1626277869503'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `patient` CHANGE `updateda_at` `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `patient` CHANGE `updated_at` `updateda_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)");
    }

}
