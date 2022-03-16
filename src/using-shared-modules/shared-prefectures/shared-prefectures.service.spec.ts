import { Test, TestingModule } from '@nestjs/testing';
import { SharedPrefecturesService } from './shared-prefectures.service';

describe('SharedPrefecturesService', () => {
  let service: SharedPrefecturesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SharedPrefecturesService],
    }).compile();

    service = module.get<SharedPrefecturesService>(SharedPrefecturesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
