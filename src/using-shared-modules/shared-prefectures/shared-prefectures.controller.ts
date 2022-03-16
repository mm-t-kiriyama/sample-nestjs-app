import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PrefectureResponseDto } from 'sample-nestjs-library/libs/prefectures/src/dto/response.dto';
import { SharedPrefecturesService } from './shared-prefectures.service';

@Controller('shared-prefectures')
export class SharedPrefecturesController {
  constructor(private readonly sharedPrefecturesService: SharedPrefecturesService) {}

  @Get()
  async test(): Promise<PrefectureResponseDto[]> {
    return await this.sharedPrefecturesService.findAll()
  }
}
