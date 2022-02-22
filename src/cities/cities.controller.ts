import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CitiesService } from './cities.service';
import { City } from './entities/city.entity';

@Controller('cities')
export class CitiesController {
  constructor(private readonly citiesService: CitiesService) {}

  @Get()
  async findAll(): Promise<City[]> {
    return await this.citiesService.findAll()
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<City> {
    return await this.citiesService.findById(+id)
  }
}
