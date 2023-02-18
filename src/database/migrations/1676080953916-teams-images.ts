import {MigrationInterface, QueryRunner} from "typeorm";

export class teamsImages1676080953916 implements MigrationInterface {
    name = 'teamsImages1676080953916'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`matches\` ADD \`teamAimage\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`matches\` ADD \`teamBimage\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`matches\` DROP COLUMN \`teamBimage\``);
        await queryRunner.query(`ALTER TABLE \`matches\` DROP COLUMN \`teamAimage\``);
    }

}
