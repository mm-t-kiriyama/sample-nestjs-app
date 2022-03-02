import { Module } from '@nestjs/common';
import { JobOffersService } from './job-offers.service';
import { JobOffersController } from './job-offers.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JobOffer } from './entities/job-offer.entity';

@Module({
  imports: [TypeOrmModule.forFeature([JobOffer]), JobOffersModule],
  controllers: [JobOffersController],
  providers: [JobOffersService],
  exports: [JobOffersService]
})
export class JobOffersModule {}
