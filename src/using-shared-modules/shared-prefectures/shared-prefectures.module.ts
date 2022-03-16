import { Module } from '@nestjs/common';
import { SharedPrefecturesService } from './shared-prefectures.service';
import { SharedPrefecturesController } from './shared-prefectures.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Prefecture } from 'sample-shared-modules/common/prefectures/entites/prefectures.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Prefecture])],
  controllers: [SharedPrefecturesController],
  providers: [SharedPrefecturesService],
  exports: [SharedPrefecturesService]
})
export class SharedPrefecturesModule {}
