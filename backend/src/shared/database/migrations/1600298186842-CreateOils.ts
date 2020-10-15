import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateOils1600298186842 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'oils',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: false,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'expiration',
            type: 'timestamp with time zone',
          },
          {
            name: 'info',
            type: 'varchar',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('oils');
  }
}
