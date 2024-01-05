import { DataSource, DataSourceOptions } from 'typeorm';

import { config } from 'dotenv';
import { join } from 'path';

config();

const { MYSQL_HOST, MYSQL_USER, MYSQL_PASSWORD, MYSQL_DATABASE, PATH_TO_RUN } =
  process.env;

const path = PATH_TO_RUN || `migrations`;

export const dbConfig: DataSourceOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'Azar@1307',
  database: 'organization_db',
  entities: [join(process.cwd(), 'dist/**/*.entity.js')],
  synchronize: true,
};

export default new DataSource(dbConfig);
