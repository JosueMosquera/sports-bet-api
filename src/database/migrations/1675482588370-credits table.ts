import {MigrationInterface, QueryRunner} from "typeorm";

export class creditsTable1675482588370 implements MigrationInterface {
    name = 'creditsTable1675482588370'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`credits\` (\`id\` int NOT NULL AUTO_INCREMENT, \`ammount\` float NOT NULL, \`type\` varchar(255) NOT NULL, \`creditCardCode\` varchar(255) NOT NULL, \`isDeleted\` tinyint NOT NULL DEFAULT 0, \`createdAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`userIdId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`users\` ADD \`availableCredits\` float NOT NULL DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE \`credits\` ADD CONSTRAINT \`FK_cb0295c2ee6fc4523daf1f4ea47\` FOREIGN KEY (\`userIdId\`) REFERENCES \`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`credits\` DROP FOREIGN KEY \`FK_cb0295c2ee6fc4523daf1f4ea47\``);
        await queryRunner.query(`ALTER TABLE \`users\` DROP COLUMN \`availableCredits\``);
        await queryRunner.query(`DROP TABLE \`credits\``);
    }

}
