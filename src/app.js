import Koa from 'koa';
import router from './routes';
import CORS from '@koa/cors';

const app = new Koa();

app.use(new CORS());
app.use(router.routes(), router.allowedMethods());

app.listen(12005, () => {
  console.log('listening at 12005');
});
