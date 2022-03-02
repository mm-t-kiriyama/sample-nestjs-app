import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as fs from 'fs'
import { dump } from 'js-yaml'
import { AppModule } from './app.module';
import { CitiesModule } from './v1/common/cities/cities.module';
import { PrefecturesModule } from './v1/common/prefectures/prefectures.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    // ログレベルを記載
    // SEE: https://docs.nestjs.com/techniques/logger
    logger: ['error', 'warn'],
  });

  /**
   * 都道府県のAPI仕様書
   * NOTE: PrefecturesModuleはCitiesModuleを取り込んでいるため、citiesのschemaも表示されます.
   *       localhost:3000/api/prefectures にアクセスするとAPI定義をSwaggerUIで確認できます.
   * SEE: https://docs.nestjs.com/openapi/introduction
   */
  const prefecturesOptions = new DocumentBuilder()
    .setTitle('Prefectures')
    .setDescription('Prefectures API description')
    .setVersion('1.0')
    .addTag('prefectures', '都道府県API')
    .build();
  const prefectureDocuments = SwaggerModule.createDocument(app, prefecturesOptions, {
     // PrefecturesModuleを指定 (複数のModuleを指定することも可能)
    include: [PrefecturesModule]
  });
  SwaggerModule.setup('api/common/prefectures', app, prefectureDocuments);
  // ファイルを出力する (prefectureDocuments オブジェクトがyaml形式になってます)
  fs.writeFileSync("./docs/common/swagger-prefectures.yaml", dump(prefectureDocuments, {}))

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
  SwaggerModule.setup('api/common/cities', app, citiesDocuments);
  fs.writeFileSync("./docs/common/swagger-cities.yaml", dump(citiesDocuments, {}))

  await app.listen(3000);
}
bootstrap();
