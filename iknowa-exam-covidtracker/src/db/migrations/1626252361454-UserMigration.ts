import {MigrationInterface, QueryRunner} from "typeorm";

export class UserMigration1626252361454 implements MigrationInterface {
    name = 'UserMigration1626252361454'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `user` (`id` varchar(36) NOT NULL, `firstname` varchar(50) NOT NULL, `lastname` varchar(50) NOT NULL, `birthdate` datetime NOT NULL, `sex` varchar(50) NOT NULL, `username` varchar(50) NOT NULL, `password` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP TABLE `user`");
    }

}
