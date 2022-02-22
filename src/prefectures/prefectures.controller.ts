import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PrefecturesService } from './prefectures.service';
import { Prefecture } from './entities/prefecture.entity';
import { CitiesService } from '../cities/cities.service';
import { City } from '../cities/entities/city.entity';

@Controller('prefectures')
export class PrefecturesController {
  constructor(
    private readonly prefecturesService: PrefecturesService,
    private readonly citiesService: CitiesService
  ) {}

  @Get()
  async findAll() :Promise<Prefecture[]> {
    return await this.prefecturesService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<Prefecture> {
    return await this.prefecturesService.findById(+id);
  }

  @Get(':id/cities')
  async findCitiesByPrefectureId(@Param('id') id: string): Promise<City[]> {
    return await this.citiesService.findByPrefectureId(+id)
  }
}
