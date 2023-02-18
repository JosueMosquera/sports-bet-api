import {MigrationInterface, QueryRunner} from "typeorm";

export class reStructure1675828104884 implements MigrationInterface {
    name = 'reStructure1675828104884'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`match-predictions\` DROP COLUMN \`betOffer\``);
        await queryRunner.query(`ALTER TABLE \`match-predictions\` DROP COLUMN \`isMatchStarted\``);
        await queryRunner.query(`ALTER TABLE \`match-predictions\` DROP COLUMN \`isMatchFinished\``);
        await queryRunner.query(`ALTER TABLE \`matches\` ADD \`isMatchStarted\` tinyint NOT NULL DEFAULT 0`);
        await queryRunner.query(`ALTER TABLE \`matches\` ADD \`result\` varchar(255) NOT NULL DEFAULT 'no result yet'`);
        await queryRunner.query(`ALTER TABLE \`matches\` ADD \`isMatchFinished\` tinyint NOT NULL DEFAULT 0`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`matches\` DROP COLUMN \`isMatchFinished\``);
        await queryRunner.query(`ALTER TABLE \`matches\` DROP COLUMN \`result\``);
        await queryRunner.query(`ALTER TABLE \`matches\` DROP COLUMN \`isMatchStarted\``);
        await queryRunner.query(`ALTER TABLE \`match-predictions\` ADD \`isMatchFinished\` tinyint NOT NULL DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE \`match-predictions\` ADD \`isMatchStarted\` tinyint NOT NULL DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE \`match-predictions\` ADD \`betOffer\` int NOT NULL`);
    }

}
