import { Module } from '@nestjs/common';
import { PrefecturesService } from './prefectures.service';
import { PrefecturesController } from './prefectures.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Prefecture } from './entities/prefecture.entity';
import { CitiesModule } from 'src/cities/cities.module';

@Module({
  imports: [TypeOrmModule.forFeature([Prefecture]), CitiesModule],
  controllers: [PrefecturesController],
  providers: [PrefecturesService],
  exports: [PrefecturesService, TypeOrmModule]
})
export class PrefecturesModule {}
