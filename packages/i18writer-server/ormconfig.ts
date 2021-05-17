import { SqliteConnectionOptions } from 'typeorm/driver/sqlite/SqliteConnectionOptions';

export const ormconfig: SqliteConnectionOptions = {
    type: 'sqlite',
    database: 'db/db',
    entities: ['dist/src/**/*.entity.js'],
    synchronize: false,
    migrations: ['dist/src/db/migrations/*.js'],
    cli: {
        migrationsDir: 'src/db/migrations',
    },
};

export default ormconfig;

