import { MigrationInterface, QueryRunner } from 'typeorm';

export class noImageDefault1678516013915 implements MigrationInterface {
  name = 'noImageDefault1678516013915';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`teams\` CHANGE \`teamImage\` \`teamImage\` varchar(255) NOT NULL DEFAULT 'no image'`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`teams\` CHANGE \`teamImage\` \`teamImage\` varchar(255) NOT NULL`,
    );
  }
}
