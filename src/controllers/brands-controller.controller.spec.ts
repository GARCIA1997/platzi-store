import { Test, TestingModule } from '@nestjs/testing';
import { BrandsControllerController } from './brands-controller.controller';

describe('BrandsControllerController', () => {
  let controller: BrandsControllerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BrandsControllerController],
    }).compile();

    controller = module.get<BrandsControllerController>(BrandsControllerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
