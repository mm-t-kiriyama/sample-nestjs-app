import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as fs from 'fs';
import { dump } from 'js-yaml';
import { AppModule } from './app.module';
import { CitiesModule } from './v1/common/cities/cities.module';
import { PrefecturesModule } from './v1/common/prefectures/prefectures.module';
import { IryouJobOffersModule } from './v1/iryou/job-offers/job-offers.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    // ログレベルを記載
    // SEE: https://docs.nestjs.com/techniques/logger
    logger: ['log', 'debug', 'error', 'warn'],
  });
  // v1 プレフィックスを有効化
  // TODO: ディレクトリ構成とバージョニングについて考える
  // NOTE: v2を実装する際は色々考えないといけない
  // SEE: https://qiita.com/potato4d/items/2d5dc727d33e06260a44
  app.setGlobalPrefix('v1');

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
  const prefectureDocuments = SwaggerModule.createDocument(
    app,
    prefecturesOptions,
    {
      // PrefecturesModuleを指定 (複数のModuleを指定することも可能)
      include: [PrefecturesModule],
    },
  );
  SwaggerModule.setup('api/common/prefectures', app, prefectureDocuments);
  // ファイルを出力する (prefectureDocuments オブジェクトがyaml形式になってます)
  fs.writeFileSync(
    './docs/common/swagger-prefectures.yaml',
    dump(prefectureDocuments, {}),
  );

  // Cities Documents
  const citiesOptions = new DocumentBuilder()
    .setTitle('Cities')
    .setDescription('Cities API description')
    .setVersion('1.0')
    .addTag('cities')
    .build();
  const citiesDocuments = SwaggerModule.createDocument(app, citiesOptions, {
    include: [CitiesModule],
  });
  SwaggerModule.setup('api/common/cities', app, citiesDocuments);
  fs.writeFileSync(
    './docs/common/swagger-cities.yaml',
    dump(citiesDocuments, {}),
  );

  // Iryou Documents
  const IryouOptions = new DocumentBuilder()
    .setTitle('Iryou')
    .setDescription('Iryou API description')
    .setVersion('1.0')
    .addTag('iryou')
    .build();
  const iryouDocuments = SwaggerModule.createDocument(app, IryouOptions, {
    include: [IryouJobOffersModule], // 医療に関するモジュールを追加していく
  });
  fs.writeFileSync(
    './docs/common/swagger-iryou.yaml',
    dump(iryouDocuments, {})
  );

  await app.listen(3000);
}
bootstrap();
