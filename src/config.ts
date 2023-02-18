import { registerAs } from '@nestjs/config';

export default registerAs('config', () => ({
  database: {
    mysql: {
      name: process.env.MYSQL_DATABASE,
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      port: parseInt(process.env.MYSQL_PORT, 10),
      host: process.env.MYSQL_HOST,
    },
  },
}));
