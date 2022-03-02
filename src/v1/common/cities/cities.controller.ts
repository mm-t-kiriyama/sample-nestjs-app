import {
  Controller,
  Get,
  Param,
  UseFilters,
  NotFoundException,
  ParseIntPipe,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { HttpExceptionFilter } from '../../../app/filters/http-exception.filter';
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
  @ApiOperation({
    operationId: 'findById',
    summary: '市区町村IDの市区町村情報を取得する',
  })
  async findById(@Param('id', ParseIntPipe) id: number): Promise<City> {
    const city = await this.citiesService.findById(id);
    // エラーハンドリング
    if (!city) {
      throw new NotFoundException();
    }

    return city;
  }
}
