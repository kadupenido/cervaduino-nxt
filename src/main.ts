import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';
import { ConfigService } from './config/config.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    bodyParser: true,
    cors: true,
    logger: true,
  });

  const configService: ConfigService = app.get(ConfigService);

  await app.listen(configService.port);

  Logger.log(`Listening on Port ${configService.port}`);
}

bootstrap();
