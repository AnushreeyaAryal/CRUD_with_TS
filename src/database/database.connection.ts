import 'reflect-metadata';
import { createConnection, Connection, ConnectionOptions } from 'typeorm';
import { join } from 'path'; //concatinate path segments
const parentDir = join(__dirname, '..'); // Joins the current directory (__dirname) with .. to get the parent directory.

const connectionOpts: ConnectionOptions = {
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT) || 5432,
  username: process.env.DB_USERNAME || 'postgres',
  password: process.env.DB_PASSWORD || '1234',
  database: process.env.DB_NAME || 'postgres',
  entities: [
    `${parentDir}/**/*.entity.ts`,
  ],
  synchronize: true, //utomatically synchronizes the database schema with the entity definitions
};

const connection:Promise<Connection> = createConnection(connectionOpts);

export default connection;//