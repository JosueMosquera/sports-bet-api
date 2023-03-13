import {MigrationInterface, QueryRunner} from "typeorm";

export class teamsTable1678250426537 implements MigrationInterface {
    name = 'teamsTable1678250426537'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`teams\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`teamImage\` varchar(255) NOT NULL, \`deletedAt\` timestamp NULL, \`createdAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`matches\` DROP COLUMN \`teamA\``);
        await queryRunner.query(`ALTER TABLE \`matches\` DROP COLUMN \`teamB\``);
        await queryRunner.query(`ALTER TABLE \`matches\` DROP COLUMN \`teamAimage\``);
        await queryRunner.query(`ALTER TABLE \`matches\` DROP COLUMN \`teamBimage\``);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`matches\` ADD \`teamBimage\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`matches\` ADD \`teamAimage\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`matches\` ADD \`teamB\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`matches\` ADD \`teamA\` varchar(255) NOT NULL`);
        await queryRunner.query(`DROP TABLE \`teams\``);
    }

}
