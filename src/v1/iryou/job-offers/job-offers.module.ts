import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JobOffersModule } from '../.../../../common/job-offers/job-offers.module';
import { IryouJobOffersService } from './job-offers.service';
import { IryouJobOffersController } from './job-offers.controller';
import { IryouJobOffer } from './entites/job-offer.entity';

// 継承しているJobOffersModuleをimportする
@Module({
  imports: [TypeOrmModule.forFeature([IryouJobOffer]), JobOffersModule],
  controllers: [IryouJobOffersController],
  providers: [IryouJobOffersService],
  exports: [IryouJobOffersService]
})
export class IryouJobOffersModule {}
