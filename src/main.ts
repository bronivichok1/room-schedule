import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Включение CORS
  app.enableCors({
    origin: 'http://localhost:3001', // Укажите ваш URL для React приложения
    credentials: true,
  });

  await app.listen(3000);
}
bootstrap();