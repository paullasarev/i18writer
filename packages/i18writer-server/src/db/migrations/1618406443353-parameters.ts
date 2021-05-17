import {MigrationInterface, QueryRunner} from "typeorm";

export class parameters1618406443353 implements MigrationInterface {
    name = 'parameters1618406443353'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "message" ("messageID" varchar NOT NULL, "language" varchar NOT NULL, "message" varchar NOT NULL, PRIMARY KEY ("messageID", "language"))`);
        await queryRunner.query(`CREATE TABLE "message_parameter" ("messageID" varchar NOT NULL, "name" varchar NOT NULL, "messageIDMessageID" varchar, "messageIDLanguage" varchar, PRIMARY KEY ("messageID", "name"))`);
        await queryRunner.query(`CREATE TABLE "temporary_message_parameter" ("messageID" varchar NOT NULL, "name" varchar NOT NULL, "messageIDMessageID" varchar, "messageIDLanguage" varchar, CONSTRAINT "FK_a5ed55ee2aad61cbc3a6f4affd2" FOREIGN KEY ("messageIDMessageID", "messageIDLanguage") REFERENCES "message" ("messageID", "language") ON DELETE NO ACTION ON UPDATE NO ACTION, PRIMARY KEY ("messageID", "name"))`);
        await queryRunner.query(`INSERT INTO "temporary_message_parameter"("messageID", "name", "messageIDMessageID", "messageIDLanguage") SELECT "messageID", "name", "messageIDMessageID", "messageIDLanguage" FROM "message_parameter"`);
        await queryRunner.query(`DROP TABLE "message_parameter"`);
        await queryRunner.query(`ALTER TABLE "temporary_message_parameter" RENAME TO "message_parameter"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "message_parameter" RENAME TO "temporary_message_parameter"`);
        await queryRunner.query(`CREATE TABLE "message_parameter" ("messageID" varchar NOT NULL, "name" varchar NOT NULL, "messageIDMessageID" varchar, "messageIDLanguage" varchar, PRIMARY KEY ("messageID", "name"))`);
        await queryRunner.query(`INSERT INTO "message_parameter"("messageID", "name", "messageIDMessageID", "messageIDLanguage") SELECT "messageID", "name", "messageIDMessageID", "messageIDLanguage" FROM "temporary_message_parameter"`);
        await queryRunner.query(`DROP TABLE "temporary_message_parameter"`);
        await queryRunner.query(`DROP TABLE "message_parameter"`);
        await queryRunner.query(`DROP TABLE "message"`);
    }

}
