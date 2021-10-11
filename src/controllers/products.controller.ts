import { Controller, Get, Query, Param, Post, Body, Put, Delete, HttpCode, HttpStatus, Res } from '@nestjs/common';
import {Response} from 'express';
@Controller('products')
export class ProductsController {  @Get()
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    return {
      message: `products limit=> ${limit} offset=> ${offset} brand=> ${brand}`,
    };
  }

  @Get('filter')
  getProductFilter() {
    return `yo soy un filter`;
  }

  @Get(':productId')
  getOne(@Param('productId') productId: string) {
    return `product ${productId}`;
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() payload: any) {
    return {
      message: 'accion de crear',
      payload,
    };
  }
  @Put(':id')
  @HttpCode(HttpStatus.ACCEPTED)
  update(@Param('id') id: number, @Body() payload: any){
    return {
      message: 'accion de crear',
      payload,
      id,
    };
  }
  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  delete(@Param('id') id: number){
    return {
      message: 'Eliminado'
    }
  }
}
