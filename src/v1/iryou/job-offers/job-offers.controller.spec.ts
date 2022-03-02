import { Test, TestingModule } from '@nestjs/testing';
import { IryouJobOffersController } from './job-offers.controller';
import { IryouJobOffersService } from './job-offers.service';

describe('JobOffersController', () => {
  let controller: IryouJobOffersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IryouJobOffersController],
      providers: [IryouJobOffersService],
    }).compile();

    controller = module.get<IryouJobOffersController>(IryouJobOffersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
