import {MigrationInterface, QueryRunner} from "typeorm";

export class fixEntityMatch1678600988205 implements MigrationInterface {
    name = 'fixEntityMatch1678600988205'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`matches\` ADD \`teamAId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`matches\` ADD \`teamBId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`matches\` ADD CONSTRAINT \`FK_71e3c30c26d5c72bd77479963eb\` FOREIGN KEY (\`teamAId\`) REFERENCES \`teams\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`matches\` ADD CONSTRAINT \`FK_6dad3cc6e21ab333537eb680d29\` FOREIGN KEY (\`teamBId\`) REFERENCES \`teams\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`matches\` DROP FOREIGN KEY \`FK_6dad3cc6e21ab333537eb680d29\``);
        await queryRunner.query(`ALTER TABLE \`matches\` DROP FOREIGN KEY \`FK_71e3c30c26d5c72bd77479963eb\``);
        await queryRunner.query(`ALTER TABLE \`matches\` DROP COLUMN \`teamBId\``);
        await queryRunner.query(`ALTER TABLE \`matches\` DROP COLUMN \`teamAId\``);
    }

}
