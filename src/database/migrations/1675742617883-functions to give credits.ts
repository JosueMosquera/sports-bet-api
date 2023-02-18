import {MigrationInterface, QueryRunner} from "typeorm";

export class functionsToGiveCredits1675742617883 implements MigrationInterface {
    name = 'functionsToGiveCredits1675742617883'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`match-predictions\` ADD \`betOffer\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`match-predictions\` ADD \`isTeamAwins\` tinyint NOT NULL DEFAULT 0`);
        await queryRunner.query(`ALTER TABLE \`match-predictions\` ADD \`isTeamBwins\` tinyint NOT NULL DEFAULT 0`);
        await queryRunner.query(`ALTER TABLE \`match-predictions\` ADD \`isAdraft\` tinyint NOT NULL DEFAULT 0`);
        await queryRunner.query(`ALTER TABLE \`match-predictions\` ADD \`isMatchStarted\` tinyint NOT NULL DEFAULT 0`);
        await queryRunner.query(`ALTER TABLE \`match-predictions\` ADD \`isMatchFinished\` tinyint NOT NULL DEFAULT 0`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`match-predictions\` DROP COLUMN \`isMatchFinished\``);
        await queryRunner.query(`ALTER TABLE \`match-predictions\` DROP COLUMN \`isMatchStarted\``);
        await queryRunner.query(`ALTER TABLE \`match-predictions\` DROP COLUMN \`isAdraft\``);
        await queryRunner.query(`ALTER TABLE \`match-predictions\` DROP COLUMN \`isTeamBwins\``);
        await queryRunner.query(`ALTER TABLE \`match-predictions\` DROP COLUMN \`isTeamAwins\``);
        await queryRunner.query(`ALTER TABLE \`match-predictions\` DROP COLUMN \`betOffer\``);
    }

}
