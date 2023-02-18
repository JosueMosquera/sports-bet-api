import {MigrationInterface, QueryRunner} from "typeorm";

export class reStructure21675828177878 implements MigrationInterface {
    name = 'reStructure21675828177878'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`match-predictions\` DROP FOREIGN KEY \`FK_03f429886cbdb25e6bc8ce6d1fc\``);
        await queryRunner.query(`ALTER TABLE \`match-predictions\` DROP FOREIGN KEY \`FK_0ced4c057023288175edf7419a3\``);
        await queryRunner.query(`ALTER TABLE \`match-predictions\` DROP FOREIGN KEY \`FK_71c37b12d7e58da54476e39cddb\``);
        await queryRunner.query(`DROP INDEX \`REL_03f429886cbdb25e6bc8ce6d1f\` ON \`match-predictions\``);
        await queryRunner.query(`DROP INDEX \`REL_0ced4c057023288175edf7419a\` ON \`match-predictions\``);
        await queryRunner.query(`DROP INDEX \`REL_71c37b12d7e58da54476e39cdd\` ON \`match-predictions\``);
        await queryRunner.query(`ALTER TABLE \`match-predictions\` DROP COLUMN \`userIdId\``);
        await queryRunner.query(`ALTER TABLE \`match-predictions\` DROP COLUMN \`matchIdId\``);
        await queryRunner.query(`ALTER TABLE \`match-predictions\` DROP COLUMN \`transactionIdId\``);
        await queryRunner.query(`ALTER TABLE \`match-predictions\` ADD \`userId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`match-predictions\` ADD UNIQUE INDEX \`IDX_fe7d3c4fc11e9c571d6d89b750\` (\`userId\`)`);
        await queryRunner.query(`ALTER TABLE \`match-predictions\` ADD \`matchId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`match-predictions\` ADD UNIQUE INDEX \`IDX_47a23999a101c28acf1fab7ae5\` (\`matchId\`)`);
        await queryRunner.query(`ALTER TABLE \`match-predictions\` ADD \`transactionId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`match-predictions\` ADD UNIQUE INDEX \`IDX_079ccafb49bac66b0a8d21ed41\` (\`transactionId\`)`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`REL_fe7d3c4fc11e9c571d6d89b750\` ON \`match-predictions\` (\`userId\`)`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`REL_47a23999a101c28acf1fab7ae5\` ON \`match-predictions\` (\`matchId\`)`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`REL_079ccafb49bac66b0a8d21ed41\` ON \`match-predictions\` (\`transactionId\`)`);
        await queryRunner.query(`ALTER TABLE \`match-predictions\` ADD CONSTRAINT \`FK_fe7d3c4fc11e9c571d6d89b750e\` FOREIGN KEY (\`userId\`) REFERENCES \`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`match-predictions\` ADD CONSTRAINT \`FK_47a23999a101c28acf1fab7ae52\` FOREIGN KEY (\`matchId\`) REFERENCES \`matches\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`match-predictions\` ADD CONSTRAINT \`FK_079ccafb49bac66b0a8d21ed41e\` FOREIGN KEY (\`transactionId\`) REFERENCES \`credits\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`match-predictions\` DROP FOREIGN KEY \`FK_079ccafb49bac66b0a8d21ed41e\``);
        await queryRunner.query(`ALTER TABLE \`match-predictions\` DROP FOREIGN KEY \`FK_47a23999a101c28acf1fab7ae52\``);
        await queryRunner.query(`ALTER TABLE \`match-predictions\` DROP FOREIGN KEY \`FK_fe7d3c4fc11e9c571d6d89b750e\``);
        await queryRunner.query(`DROP INDEX \`REL_079ccafb49bac66b0a8d21ed41\` ON \`match-predictions\``);
        await queryRunner.query(`DROP INDEX \`REL_47a23999a101c28acf1fab7ae5\` ON \`match-predictions\``);
        await queryRunner.query(`DROP INDEX \`REL_fe7d3c4fc11e9c571d6d89b750\` ON \`match-predictions\``);
        await queryRunner.query(`ALTER TABLE \`match-predictions\` DROP INDEX \`IDX_079ccafb49bac66b0a8d21ed41\``);
        await queryRunner.query(`ALTER TABLE \`match-predictions\` DROP COLUMN \`transactionId\``);
        await queryRunner.query(`ALTER TABLE \`match-predictions\` DROP INDEX \`IDX_47a23999a101c28acf1fab7ae5\``);
        await queryRunner.query(`ALTER TABLE \`match-predictions\` DROP COLUMN \`matchId\``);
        await queryRunner.query(`ALTER TABLE \`match-predictions\` DROP INDEX \`IDX_fe7d3c4fc11e9c571d6d89b750\``);
        await queryRunner.query(`ALTER TABLE \`match-predictions\` DROP COLUMN \`userId\``);
        await queryRunner.query(`ALTER TABLE \`match-predictions\` ADD \`transactionIdId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`match-predictions\` ADD \`matchIdId\` int NULL`);
        await queryRunner.query(`ALTER TABLE \`match-predictions\` ADD \`userIdId\` int NULL`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`REL_71c37b12d7e58da54476e39cdd\` ON \`match-predictions\` (\`userIdId\`)`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`REL_0ced4c057023288175edf7419a\` ON \`match-predictions\` (\`transactionIdId\`)`);
        await queryRunner.query(`CREATE UNIQUE INDEX \`REL_03f429886cbdb25e6bc8ce6d1f\` ON \`match-predictions\` (\`matchIdId\`)`);
        await queryRunner.query(`ALTER TABLE \`match-predictions\` ADD CONSTRAINT \`FK_71c37b12d7e58da54476e39cddb\` FOREIGN KEY (\`userIdId\`) REFERENCES \`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`match-predictions\` ADD CONSTRAINT \`FK_0ced4c057023288175edf7419a3\` FOREIGN KEY (\`transactionIdId\`) REFERENCES \`credits\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`match-predictions\` ADD CONSTRAINT \`FK_03f429886cbdb25e6bc8ce6d1fc\` FOREIGN KEY (\`matchIdId\`) REFERENCES \`matches\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
