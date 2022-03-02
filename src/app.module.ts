import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PrefecturesModule } from './v1/common/prefectures/prefectures.module';
import { CitiesModule } from './v1/common/cities/cities.module';
import { Connection } from 'typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'admin',
      password: '28fLE3AxD8zIGWF8vwS1',
      database: 'trytworker_stg_v2',
      entities: ['dist/**/*.entity{ .ts,.js}'],
      // NOTE: Setting synchronize: true shouldn't be used in production - otherwise you can lose production data.
      // synchronize: true,
    }),
    PrefecturesModule,
    CitiesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
