import { Test, TestingModule } from '@nestjs/testing';
import { IryouJobOffersService } from './job-offers.service';

describe('JobOffersService', () => {
  let service: IryouJobOffersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IryouJobOffersService],
    }).compile();

    service = module.get<IryouJobOffersService>(IryouJobOffersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
