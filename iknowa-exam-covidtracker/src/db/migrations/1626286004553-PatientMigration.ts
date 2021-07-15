import {MigrationInterface, QueryRunner} from "typeorm";

export class PatientMigration1626286004553 implements MigrationInterface {
    name = 'PatientMigration1626286004553'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `patient` DROP COLUMN `deleted_at`");
        await queryRunner.query("ALTER TABLE `patient` DROP COLUMN `created_at`");
        await queryRunner.query("ALTER TABLE `patient` DROP COLUMN `updated_at`");
        await queryRunner.query("ALTER TABLE `patient` ADD `deletedAt` datetime(6) NULL");
        await queryRunner.query("ALTER TABLE `patient` ADD `created` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)");
        await queryRunner.query("ALTER TABLE `patient` ADD `updated` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `patient` DROP COLUMN `updated`");
        await queryRunner.query("ALTER TABLE `patient` DROP COLUMN `created`");
        await queryRunner.query("ALTER TABLE `patient` DROP COLUMN `deletedAt`");
        await queryRunner.query("ALTER TABLE `patient` ADD `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)");
        await queryRunner.query("ALTER TABLE `patient` ADD `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)");
        await queryRunner.query("ALTER TABLE `patient` ADD `deleted_at` datetime(6) NULL");
    }

}
