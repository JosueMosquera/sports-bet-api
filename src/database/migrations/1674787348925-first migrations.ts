import { MigrationInterface, QueryRunner } from 'typeorm';

export class firstMigrations1674787348925 implements MigrationInterface {
  name = 'firstMigrations1674787348925';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`users\` (\`id\` int NOT NULL AUTO_INCREMENT, \`userName\` varchar(255) NOT NULL, \`password\` varchar(255) NOT NULL, \`userEmail\` varchar(255) NOT NULL, \`isDeleted\` tinyint NOT NULL DEFAULT 0, \`deletedAt\` timestamp NULL, \`createdAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`matches\` (\`id\` int NOT NULL AUTO_INCREMENT, \`isDeleted\` tinyint NOT NULL DEFAULT 0, \`deletedAt\` timestamp NULL, \`createdAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE \`matches\``);
    await queryRunner.query(`DROP TABLE \`users\``);
  }
}
