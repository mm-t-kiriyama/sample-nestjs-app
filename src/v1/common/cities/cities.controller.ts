import { Controller, Get, Post, Body, Patch, Param, Delete, UseFilters } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { HttpExceptionFilter } from '../../../filters/http-exception.filter';
import { CitiesService } from './cities.service';
import { City } from './entities/city.entity';

@ApiTags('cities')
@UseFilters(new HttpExceptionFilter())
@Controller('cities')
export class CitiesController {
  constructor(private readonly citiesService: CitiesService) {}

  /**
   * 市区町村IDの市区町村情報を取得する
   * 
   * @param {string} id 市区町村ID
   * @returns 
   */
  @Get(':id')
  @ApiOperation({ operationId: 'findAll', summary: '都道府県リストを取得する' })
  async findById(@Param('id') id: string): Promise<City> {
    return await this.citiesService.findById(+id)
  }
}