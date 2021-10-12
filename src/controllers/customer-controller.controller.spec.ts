import { Test, TestingModule } from '@nestjs/testing';
import { CustomerControllerController } from './customer-controller.controller';

describe('CustomerControllerController', () => {
  let controller: CustomerControllerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CustomerControllerController],
    }).compile();

    controller = module.get<CustomerControllerController>(CustomerControllerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
