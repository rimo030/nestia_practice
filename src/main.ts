import { NestFactory } from '@nestjs/core';
import { SwaggerModule } from '@nestjs/swagger';
import { readFileSync } from 'fs';
import path from 'path';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();

  const swaagerConfig = readFileSync(
    path.join(__dirname, '../swagger.json'),
    'utf8',
  );
  const swaggerDocument = JSON.parse(swaagerConfig);
  SwaggerModule.setup('api/swagger', app, swaggerDocument);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
