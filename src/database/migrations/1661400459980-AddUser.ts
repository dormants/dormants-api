import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddUser1661400459980 implements MigrationInterface {
  name = 'AddUser1661400459980';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'CREATE TABLE `user` (`id` int NOT NULL AUTO_INCREMENT, `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), `kakaoId` int NOT NULL, `nickname` varchar(255) NOT NULL, `email` varchar(255) NULL, `goal` varchar(255) NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB',
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP TABLE `user`');
  }
}
