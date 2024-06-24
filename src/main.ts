import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, // Automatically strip non-whitelisted properties
    forbidNonWhitelisted: true, // Throw an error if non-whitelisted properties are provided
    transform: true, // Transform payloads to be objects typed according to their DTO classes
  }));
  await app.listen(3000);
}
bootstrap();
