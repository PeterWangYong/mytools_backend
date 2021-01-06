import Router from 'koa-router';
import getBgImage from '../service/getBgImage';
import getDate from '../service/getDate';

const router = new Router();

router.get('/', async (ctx, next) => {
  ctx.body = 'hello world';
});

router.get('/getBgImage', async (ctx, next) => {
  const res = await getBgImage();
  // ctx.body = 'http://image.wufazhuce.com/Fm8IFQ7S259Q_VepNyrfhaOmwU-c';
  ctx.body = res;
});

router.get('/getDate', (ctx, next) => {
  ctx.body = getDate();
});

export default router;
