import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddCourse1661408430528 implements MigrationInterface {
  name = 'AddCourse1661408430528';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`place\` (\`id\` int NOT NULL AUTO_INCREMENT, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`name\` varchar(255) NOT NULL, \`lat\` int NOT NULL, \`lng\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`course\` (\`id\` int NOT NULL AUTO_INCREMENT, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`name\` varchar(255) NOT NULL, \`expectedTime\` int NOT NULL, \`distance\` int NOT NULL, \`startingPlaceId\` int NULL, \`endPlaceId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(`ALTER TABLE \`place\` DROP COLUMN \`lat\``);
    await queryRunner.query(`ALTER TABLE \`place\` DROP COLUMN \`lng\``);
    await queryRunner.query(`ALTER TABLE \`place\` ADD \`lat\` int NOT NULL`);
    await queryRunner.query(`ALTER TABLE \`place\` ADD \`lng\` int NOT NULL`);
    await queryRunner.query(
      `ALTER TABLE \`course\` ADD CONSTRAINT \`FK_d1a009685672c6273100ec72138\` FOREIGN KEY (\`startingPlaceId\`) REFERENCES \`place\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`course\` ADD CONSTRAINT \`FK_f95b41325474330fa9f21f4d9cc\` FOREIGN KEY (\`endPlaceId\`) REFERENCES \`place\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`course\` DROP FOREIGN KEY \`FK_f95b41325474330fa9f21f4d9cc\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`course\` DROP FOREIGN KEY \`FK_d1a009685672c6273100ec72138\``,
    );
    await queryRunner.query(`ALTER TABLE \`place\` DROP COLUMN \`lng\``);
    await queryRunner.query(`ALTER TABLE \`place\` DROP COLUMN \`lat\``);
    await queryRunner.query(`ALTER TABLE \`place\` ADD \`lng\` int NOT NULL`);
    await queryRunner.query(`ALTER TABLE \`place\` ADD \`lat\` int NOT NULL`);
    await queryRunner.query(`DROP TABLE \`course\``);
    await queryRunner.query(`DROP TABLE \`place\``);
  }
}
