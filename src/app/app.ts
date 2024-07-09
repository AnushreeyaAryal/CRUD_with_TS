
import * as Koa from 'koa';
import * as HttpStatus from 'http-status-codes';
import movieController from '../movie/movie.controller';
import * as bodyParser from 'koa-bodyparser';
import AppDataSource from '../database/database.connection';
import * as yup from "yup";
import {createSchema}  from '../schema/validator';


const app:Koa = new Koa();

// Generic error handling middleware.
app.use(async (ctx: Koa.Context, next: () => Promise<any>) => {
  try {
    ctx.state.db=AppDataSource;
    await next();
  } catch (error) {
    ctx.status = error.statusCode || error.status || HttpStatus.StatusCodes.INTERNAL_SERVER_ERROR;
    error.status = ctx.status;
    ctx.body =  {error}
    ctx.app.emit("error", error,ctx as any)
  }
});

app.use(bodyParser());
app.use(movieController.routes());
app.use(movieController.allowedMethods()); //correct response for diallowed or non-implemented methods

async function dataForValidation() {
  const data= {
    id: 1,
    name:'poop',
    releaseYear:2002,
    rating:2
  };

try {
  // Validate data
  await createSchema.validate(data);
  console.log('Validation done');
} catch (error) {
  // Handle validation errors
  if (error instanceof yup.ValidationError) {
    console.error('Validation failed', error.errors);
  } else {
    console.error('Unexpected error', error);
  }
}
}

dataForValidation();
  
// Application error logging.
app.on('error', console.error);

export default app;
