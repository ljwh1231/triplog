import { Test, TestingModule } from '@nestjs/testing';
import { MapRecordController } from './map-record.controller';

describe('MapRecordController', () => {
  let controller: MapRecordController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MapRecordController],
    }).compile();

    controller = module.get<MapRecordController>(MapRecordController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
