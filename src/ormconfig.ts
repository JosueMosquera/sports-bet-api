const config = [
  {
    type: 'mysql',
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    synchronize: false,
    migrations: ['src/database/migrations/*.ts'],
    migrationsTableName: 'migrations',
    entities: ['src/**/*.entity.ts'],
    seeds: [`src/seeds/*.seed{.ts,.js}`],
    cli: {
      migrationsDir: 'src/database/migrations',
    },
    timexone: '-05:00',
  },
  {
    name: 'seed',
    type: 'mysql',
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    synchronize: false,
    migrations: ['src/seeds/*.ts'],
    migrationsTableName: 'seeds',
    entities: ['src/**/*.entity.ts'],
    cli: {
      migrationsDir: 'src/seeds',
    },
    timexone: '-05:00',
  },
];

export = config;
