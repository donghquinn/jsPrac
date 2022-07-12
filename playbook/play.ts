import App from 'koa';
import Router from 'koa-router';
import { Singleton } from '../src/singletonEx/singleton';
// import { config } from 'dotenv';

// config();

const port = process.env.PORT;

const app = new App();
const router = new Router();
const singleton = Singleton.getInstance();

app.use(router.allowedMethods()).use(router.routes());

app.listen(port, () => {
  console.log('@@@@@@@@@@@@@@@@');
  console.log(`Server is Listening ${port}`);
  console.log('@@@@@@@@@@@@@@@@');
})

router.get('/', (ctx) => {
  ctx.body = {
    data: console.log(process.env.ID),
    func: singleton.start(),
  }
});
