import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import { AppModule } from './app.module';
import { EntityNotFoundExceptionFilter } from './filters/entity-not-found-exception';

const PORT = 3030;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('v1');

  const config = new DocumentBuilder()
          .addTag('i18n')
          .setTitle('i18writer')
          .setDescription('i18writer API description')
          .setVersion('1.0')
          .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.useGlobalFilters(new EntityNotFoundExceptionFilter());

  console.log(`start server at http://localhost:${PORT}`);
  await app.listen(PORT);
}
bootstrap();
