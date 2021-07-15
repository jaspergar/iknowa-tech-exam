import {MigrationInterface, QueryRunner} from "typeorm";

export class PatientMigration1626280839066 implements MigrationInterface {
    name = 'PatientMigration1626280839066'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `temperature` (`id` varchar(36) NOT NULL, `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), `patientId` varchar(36) NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `temperature` ADD CONSTRAINT `FK_1fe669b14e316d74d460a492e45` FOREIGN KEY (`patientId`) REFERENCES `patient`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `temperature` DROP FOREIGN KEY `FK_1fe669b14e316d74d460a492e45`");
        await queryRunner.query("DROP TABLE `temperature`");
    }

}
