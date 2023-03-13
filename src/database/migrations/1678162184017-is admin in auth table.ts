import { MigrationInterface, QueryRunner } from 'typeorm';

export class isAdminInAuthTable1678162184017 implements MigrationInterface {
  name = 'isAdminInAuthTable1678162184017';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`users\` ADD \`isAdmin\` tinyint NOT NULL DEFAULT 0`,
    );
    await queryRunner.query(
      `ALTER TABLE \`users\` ADD \`creditCardCode\` varchar(255) NOT NULL DEFAULT 'not registered yet'`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE \`users\` DROP COLUMN \`isAdmin\``);
    await queryRunner.query(
      `ALTER TABLE \`users\` ADD \`creditCardCode\` varchar(255) NOT NULL DEFAULT 'not registered yet'`,
    );
  }
}
