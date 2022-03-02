import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { JobOffersController } from '../../common/job-offers/job-offers.controller';
import { IryouJobOffersService } from './job-offers.service';

// NOTE: @Controller(<ルーティングパス>) を記載
// NOTE: 親のJobOffersControllerを継承する
@Controller('iryou/job-offers')
export class IryouJobOffersController extends JobOffersController {
  /**
   * NOTE: 医療のJobOffersServiceを定義する
   * 
   * @param iryouJobOfferesService 
   */
  constructor(
    private readonly iryouJobOfferesService: IryouJobOffersService
  ) {
    // NOTE: 医療のJobOffersServiceで親クラスのコンストラクタを実行する
    super(iryouJobOfferesService)
  }

  @Get()
  findAll() {
    return 'response OK'
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number) {
    return this.iryouJobOfferesService.findOneIryou(id)
  }
}
