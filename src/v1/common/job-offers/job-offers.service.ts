import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { JobOffer } from './entities/job-offer.entity';

@Injectable()
export class JobOffersService {
    constructor(
        @InjectRepository(JobOffer)
        private jobOffersRepository: Repository<JobOffer>
    ) {}

    findOne(id: number): Promise<JobOffer> {
        return this.jobOffersRepository.findOne(1)
    }
}
