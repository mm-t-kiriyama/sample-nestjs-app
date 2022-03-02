import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { JobOffersService } from '../../common/job-offers/job-offers.service';
import { IryouJobOffer } from './entites/job-offer.entity';

// NOTE: 親のJobOffersServiceを継承する
@Injectable()
export class IryouJobOffersService extends JobOffersService {
    /**
     * NOTE: 医療のJobOffersRepositoryを定義する
     * 
     * @param IryouJobOffersRepository 
     */
    constructor(
        @InjectRepository(IryouJobOffer)
        private IryouJobOffersRepository: Repository<IryouJobOffer>
    ) {
        // NOTE: 医療のJobOffersRepositoryで親クラスのコンストラクタを実行する
        super(IryouJobOffersRepository)
    }

    /**
     * NOTE: ここをどういう扱いにするか悩ましい.
     *       継承元に処理を書いてもいいが、医療独自の処理になるはず...
     *       
     * 
     * @param id 
     * @returns 
     */
    findOneIryou(id: number) {
        // NOTE: どちらでも求人は取得できる
        return this.IryouJobOffersRepository.find({where: { id: id }})
        // return this.findOne(1)
    }
}
