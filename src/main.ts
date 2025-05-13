import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import session from 'express-session';
import cors from 'cors'; 

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const corsOptions = {
    origin: process.env.FRONT, 
    credentials: true, 
    optionsSuccessStatus: 200
  };
  app.use(cors(corsOptions)); 

  app.use(
    session({
      secret: process.env.SESSION_SECRET,
      resave: false,
      saveUninitialized: false,
      cookie: {
        httpOnly: true, 
        maxAge: 1000 * 60 * 60 * 2,
        sameSite: 'lax',// тут none на релизе
        secure: false // тут true на релизе
      }
    }),
  );

  app.setGlobalPrefix('api');
  await app.listen(process.env.PORT, '127.0.0.1');
}
bootstrap();
