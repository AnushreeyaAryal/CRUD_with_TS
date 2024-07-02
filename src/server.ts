import app from './app/app';
import AppDataSource from './database/database.connection';

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
AppDataSource.initialize()
  .then(() => {
    console.log("Connected to database");
    // console.log(databaseConnection);
  })
  .catch(console.error);