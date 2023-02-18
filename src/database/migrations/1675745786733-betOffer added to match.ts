import {MigrationInterface, QueryRunner} from "typeorm";

export class betOfferAddedToMatch1675745786733 implements MigrationInterface {
    name = 'betOfferAddedToMatch1675745786733'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`matches\` ADD \`betOffer\` int NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`matches\` DROP COLUMN \`betOffer\``);
    }

}
