import { Controller } from '@nestjs/common';
import { JobOffersService } from './job-offers.service';

@Controller('job-offers')
export class JobOffersController {
  constructor(private readonly jobOffersService: JobOffersService) {}
}
