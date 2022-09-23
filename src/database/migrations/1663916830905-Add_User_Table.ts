import {MigrationInterface, QueryRunner} from "typeorm";

export class AddUserTable1663916830905 implements MigrationInterface {
    name = 'AddUserTable1663916830905'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`kakaoId\``);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`goal\``);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`description\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`oauthCode\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`oauthType\` varchar(255) NOT NULL DEFAULT 'kakao'`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD UNIQUE INDEX \`IDX_e2364281027b926b879fa2fa1e\` (\`nickname\`)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`user\` DROP INDEX \`IDX_e2364281027b926b879fa2fa1e\``);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`oauthType\``);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`oauthCode\``);
        await queryRunner.query(`ALTER TABLE \`user\` DROP COLUMN \`description\``);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`goal\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`user\` ADD \`kakaoId\` int NOT NULL`);
    }

}
