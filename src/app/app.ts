
import * as Koa from 'koa';
import * as HttpStatus from 'http-status-codes';
import movieController from '../movie/movie.controller';
import * as bodyParser from 'koa-bodyparser';
import AppDataSource from '../database/database.connection';
import * as yup from "yup";


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

const createSchema= yup.object().shape({
    id: yup.number().positive().required(),
    name: yup.string().required(),
    releaseYear: yup.number().positive().integer(),
    rating: yup.number().positive().integer(),
  });
  
// Application error logging.
app.on('error', console.error);

export default app;
