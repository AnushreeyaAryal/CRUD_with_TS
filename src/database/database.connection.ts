import 'reflect-metadata';
import { DataSource, DataSourceOptions } from 'typeorm';
import { join } from 'path';

const parentDir = join(__dirname, '..');

const datasourceOpts: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT) || 5432,
  username: process.env.DB_USERNAME || 'postgres',
  password: process.env.DB_PASSWORD || '1234',
  database: process.env.DB_NAME || 'postgres',
  entities: [
    `${parentDir}/**/*.entity.ts`,
  ],
  synchronize: true,
};

const AppDataSource = new DataSource(datasourceOpts);

export default AppDataSource;
