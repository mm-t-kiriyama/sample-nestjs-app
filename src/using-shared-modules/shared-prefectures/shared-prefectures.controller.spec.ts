import { Test, TestingModule } from '@nestjs/testing';
import { SharedPrefecturesController } from './shared-prefectures.controller';
import { SharedPrefecturesService } from './shared-prefectures.service';

describe('SharedPrefecturesController', () => {
  let controller: SharedPrefecturesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SharedPrefecturesController],
      providers: [SharedPrefecturesService],
    }).compile();

    controller = module.get<SharedPrefecturesController>(SharedPrefecturesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
