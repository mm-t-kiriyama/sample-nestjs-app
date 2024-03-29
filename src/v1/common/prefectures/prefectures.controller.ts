import {
  Controller,
  Get,
  Param,
  NotFoundException,
  UseFilters,
  ParseIntPipe,
  Body,
  Post,
  ValidationPipe,
  Query,
  UsePipes,
} from '@nestjs/common';
import { PrefecturesService } from './prefectures.service';
import { Prefecture } from './entities/prefecture.entity';
import { CitiesService } from '../cities/cities.service';
import { City } from '../cities/entities/city.entity';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { HttpExceptionFilter } from '../../../app/filters/http-exception.filter';
import { CreatePrefectureDto } from './dto/create-prefecture.dto';

// OpenAPI tag に相当
@ApiTags('prefectures')
// Custom filters を利用する (Controllerに記載するとコントローラーレベルでフィルターを適応することができる)
// メソッド単位にフィルターを適応させることも可能
// SEE: https://docs.nestjs.com/exception-filters
@UseFilters(new HttpExceptionFilter())
@Controller('prefectures')
export class PrefecturesController {
  constructor(
    private readonly prefecturesService: PrefecturesService,
    private readonly citiesService: CitiesService,
  ) {}


  // /**
  //  * 都道府県一覧を取得する
  //  *
  //  * @url /v1/prefecutes
  //  *
  //  * @returns {Promise<Prefecture[]>}
  //  */
  // // @ApiOkResponse({ status: 200, description: 'status OK' }) // 必要であればレスポンスを定義することも可能です
  // // SEE: https://docs.nestjs.com/openapi/operations#responses
  // @ApiOperation({ operationId: 'findAll', summary: '都道府県リストを取得する' })
  // @Get()
  // async findAll(): Promise<Prefecture[]> {
  //   return await this.prefecturesService.findAll();
  // }

  // /**
  //  * 都道府県IDの都道府県情報を取得する
  //  *
  //  * @param {string} id 求人ID
  //  * @url /v1/prefecutes/:id NOTE: エンドポイントを記載します
  //  *
  //  * @returns {Promise<Prefecture>}
  //  *
  //  * NOTE: このように各メソッドにDocコメントを記載してください.
  //  *       また、必要に応じてアノテーションコメントを入れると読み手にわかりやすくなるので非常にWellです
  //  */
  // @ApiOperation({
  //   operationId: 'findById',
  //   summary: '都道府県IDの都道府県情報を取得する',
  // })
  // @Get(':id')
  // async findById(@Param('id', ParseIntPipe) id: number): Promise<Prefecture> {
  //   return await this.prefecturesService.findById(id);
  // }

  // /**
  //  * 都道府県IDに紐づく市区町村リストを取得する
  //  *
  //  * @param {string} id 求人ID
  //  * @url /v1/prefectures/:id/cities
  //  *
  //  * @returns {Promise<City[]>}
  //  */
  // @Get(':id/cities')
  // @ApiOperation({
  //   operationId: 'findCitiesByPrefectureId',
  //   summary: '都道府県IDに紐づく市区町村リストを取得する',
  // })
  // async findCitiesByPrefectureId(
  //   @Param('id', ParseIntPipe) id: number,
  // ): Promise<City[]> {
  //   const cities = await this.citiesService.findByPrefectureId(id);
  //   // 市区町村リストが取得出来ない場合は 404エラーを投げる
  //   // SEE: https://docs.nestjs.com/exception-filters
  //   if (!cities.length) {
  //     throw new NotFoundException();
  //   }

  //   return cities;
  // }
}
