import App from 'koa';
import Router from 'koa-router';
import { Singleton } from '../src/singletonEx/singleton';
import { config } from 'dotenv';

config();

const app = new App();
const router = new Router();
const singleton = Singleton.getInstance();

app.use(router.allowedMethods()).use(router.routes());

app.listen(Number(process.env.PORT), () => {
  console.log('@@@@@@@@@@@@@@@@');
  console.log(`Server is Listening ${process.env.PORT}`);
  console.log('@@@@@@@@@@@@@@@@');
})

router.get('/', (ctx) => {
  ctx.body = {
    data: singleton.start()
  }
});
