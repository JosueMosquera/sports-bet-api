import {MigrationInterface, QueryRunner} from "typeorm";

export class newManyToOne1675829842870 implements MigrationInterface {
    name = 'newManyToOne1675829842870'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`match-predictions\` DROP FOREIGN KEY \`FK_fe7d3c4fc11e9c571d6d89b750e\``);
        await queryRunner.query(`DROP INDEX \`REL_fe7d3c4fc11e9c571d6d89b750\` ON \`match-predictions\``);
        await queryRunner.query(`ALTER TABLE \`match-predictions\` CHANGE \`userId\` \`userIdId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`match-predictions\` ADD CONSTRAINT \`FK_71c37b12d7e58da54476e39cddb\` FOREIGN KEY (\`userIdId\`) REFERENCES \`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`match-predictions\` DROP FOREIGN KEY \`FK_71c37b12d7e58da54476e39cddb\``);
        await queryRunner.query(`ALTER TABLE \`match-predictions\` CHANGE \`userIdId\` \`userId\` int NULL`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`REL_fe7d3c4fc11e9c571d6d89b750\` ON \`match-predictions\` (\`userId\`)`);
        await queryRunner.query(`ALTER TABLE \`match-predictions\` ADD CONSTRAINT \`FK_fe7d3c4fc11e9c571d6d89b750e\` FOREIGN KEY (\`userId\`) REFERENCES \`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
