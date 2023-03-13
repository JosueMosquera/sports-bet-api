import { MigrationInterface, QueryRunner } from 'typeorm';

export class isWinedMatchAdded1678131363974 implements MigrationInterface {
  name = 'isWinedMatchAdded1678131363974';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`matches\` ADD \`isWined\` tinyint NOT NULL DEFAULT 0`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE \`matches\` DROP COLUMN \`isWined\``);
  }
}
