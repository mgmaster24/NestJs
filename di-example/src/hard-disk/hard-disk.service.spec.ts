import { Test, TestingModule } from '@nestjs/testing';
import { HardDiskService } from './hard-disk.service';

describe('HardDiskService', () => {
  let service: HardDiskService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HardDiskService]
    }).compile();

    service = module.get<HardDiskService>(HardDiskService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
