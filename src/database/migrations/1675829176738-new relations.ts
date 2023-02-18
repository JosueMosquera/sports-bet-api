import {MigrationInterface, QueryRunner} from "typeorm";

export class newRelations1675829176738 implements MigrationInterface {
    name = 'newRelations1675829176738'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX \`IDX_079ccafb49bac66b0a8d21ed41\` ON \`match-predictions\``);
        await queryRunner.query(`DROP INDEX \`IDX_47a23999a101c28acf1fab7ae5\` ON \`match-predictions\``);
        await queryRunner.query(`DROP INDEX \`IDX_fe7d3c4fc11e9c571d6d89b750\` ON \`match-predictions\``);
        await queryRunner.query(`ALTER TABLE \`matches\` ADD \`isBeted\` tinyint NOT NULL DEFAULT 0`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`matches\` DROP COLUMN \`isBeted\``);
        await queryRunner.query(`CREATE UNIQUE INDEX \`IDX_fe7d3c4fc11e9c571d6d89b750\` ON \`match-predictions\` (\`userId\`)`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`IDX_47a23999a101c28acf1fab7ae5\` ON \`match-predictions\` (\`matchId\`)`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`IDX_079ccafb49bac66b0a8d21ed41\` ON \`match-predictions\` (\`transactionId\`)`);
    }

}
