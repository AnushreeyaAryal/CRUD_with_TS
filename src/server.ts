import app from './app/app';
import AppDataSource from './database/database.connection';

const PORT: number = Number(process.env.PORT) || 3000;

AppDataSource.initialize()
  .then(() => {
    console.log('Database connection established');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error: Error) => {
    console.error('Database connection failed:', error);
  });
