import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as fs from 'fs'
import { dump } from 'js-yaml'
import { AppModule } from './app.module';
import { CitiesModule } from './cities/cities.module';
import { PrefecturesModule } from './prefectures/prefectures.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Prefectures Documents
  const prefecturesOptions = new DocumentBuilder()
    .setTitle('Prefectures')
    .setDescription('Prefectures API description')
    .setVersion('1.0')
    .addTag('prefectures')
    .build();
  const prefectureDocuments = SwaggerModule.createDocument(app, prefecturesOptions, {
    include: [PrefecturesModule]
  });
  SwaggerModule.setup('api/prefectures', app, prefectureDocuments);
  fs.writeFileSync("./docs/swagger-prefectures.yaml", dump(prefectureDocuments, {}))

  // Cities Documents
  const citiesOptions = new DocumentBuilder()
    .setTitle('Cities')
    .setDescription('Cities API description')
    .setVersion('1.0')
    .addTag('cities')
    .build();
  const citiesDocuments = SwaggerModule.createDocument(app, citiesOptions, {
    include: [CitiesModule]
  });
  SwaggerModule.setup('api/cities', app, citiesDocuments);
  fs.writeFileSync("./docs/swagger-cities.yaml", dump(citiesDocuments, {}))

  await app.listen(3000);
}
bootstrap();
