import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriesController } from './controllers/categories.controller';
import { ProductsController } from './controllers/products.controller';
import { ProductsService } from './services/products.service';
import { BrandsControllerController } from './controllers/brands-controller.controller';
import { CustomerControllerController } from './controllers/customer-controller.controller';
import { UsersControllerController } from './controllers/users-controller.controller';
import { BrandsServiceService } from './services/brands-service.service';
import { CategoriesServiceService } from './services/categories-service.service';
import { CustomersServiceService } from './services/customers-service.service';
import { UsersServiceService } from './services/users-service.service';

@Module({
  imports: [],
  controllers: [AppController, CategoriesController, ProductsController, BrandsControllerController, CustomerControllerController, UsersControllerController],
  providers: [AppService, ProductsService, BrandsServiceService, CategoriesServiceService, CustomersServiceService, UsersServiceService],
})
export class AppModule {}
