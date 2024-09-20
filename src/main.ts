import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // enable access from all origin
  app.enableCors({ credentials: true });

  await app.listen(3000);
}
bootstrap();
