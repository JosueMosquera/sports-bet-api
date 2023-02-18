import { MigrationInterface, QueryRunner } from 'typeorm';

export class matchPredictionsTable1675734733940 implements MigrationInterface {
  name = 'matchPredictionsTable1675734733940';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`match-predictions\` (\`id\` int NOT NULL AUTO_INCREMENT, \`isDeleted\` tinyint NOT NULL DEFAULT 0, \`deletedAt\` timestamp NULL, \`createdAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`userIdId\` int NULL, \`matchIdId\` int NULL, \`transactionIdId\` int NULL, UNIQUE INDEX \`REL_71c37b12d7e58da54476e39cdd\` (\`userIdId\`), UNIQUE INDEX \`REL_03f429886cbdb25e6bc8ce6d1f\` (\`matchIdId\`), UNIQUE INDEX \`REL_0ced4c057023288175edf7419a\` (\`transactionIdId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `ALTER TABLE \`matches\` ADD \`teamA\` varchar(255) NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`matches\` ADD \`teamB\` varchar(255) NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`matches\` ADD \`matchDate\` timestamp NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`match-predictions\` ADD CONSTRAINT \`FK_71c37b12d7e58da54476e39cddb\` FOREIGN KEY (\`userIdId\`) REFERENCES \`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`match-predictions\` ADD CONSTRAINT \`FK_03f429886cbdb25e6bc8ce6d1fc\` FOREIGN KEY (\`matchIdId\`) REFERENCES \`matches\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE \`match-predictions\` ADD CONSTRAINT \`FK_0ced4c057023288175edf7419a3\` FOREIGN KEY (\`transactionIdId\`) REFERENCES \`credits\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`match-predictions\` DROP FOREIGN KEY \`FK_0ced4c057023288175edf7419a3\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`match-predictions\` DROP FOREIGN KEY \`FK_03f429886cbdb25e6bc8ce6d1fc\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`match-predictions\` DROP FOREIGN KEY \`FK_71c37b12d7e58da54476e39cddb\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`matches\` DROP COLUMN \`matchDate\``,
    );
    await queryRunner.query(`ALTER TABLE \`matches\` DROP COLUMN \`teamB\``);
    await queryRunner.query(`ALTER TABLE \`matches\` DROP COLUMN \`teamA\``);
    await queryRunner.query(
      `DROP INDEX \`REL_0ced4c057023288175edf7419a\` ON \`match-predictions\``,
    );
    await queryRunner.query(
      `DROP INDEX \`REL_03f429886cbdb25e6bc8ce6d1f\` ON \`match-predictions\``,
    );
    await queryRunner.query(
      `DROP INDEX \`REL_71c37b12d7e58da54476e39cdd\` ON \`match-predictions\``,
    );
    await queryRunner.query(`DROP TABLE \`match-predictions\``);
  }
}
