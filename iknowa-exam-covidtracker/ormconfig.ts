import { MysqlConnectionOptions } from 'typeorm/driver/mysql/MysqlConnectionOptions';

// const {DB_HOST,DB_DATABASE,DB_USERNAME,DB_PASSWORD,ENTITIES,MIGRATIONS,MIGRATIONSDIR} = process.env

const config: MysqlConnectionOptions = { // TODO : add db keys to env
  type: 'mysql',
  host:'localhost',
  port: 3306,
  username: 'root',
  password: 'l4l4k3rs',
  database: 'covid_tracker',
  entities: ['dist/**/*.entity{.ts,.js}'],
  synchronize: false,
  migrations: ['dist/src/db/migrations/*.js'],
  cli: {
    migrationsDir:'src/db/migrations',
  },
};

export default config;
