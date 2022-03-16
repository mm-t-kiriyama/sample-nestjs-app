import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PrefectureResponseDto } from '@shared-modules/prefectures';
import { Prefecture } from '@shared-modules/prefectures';
import { Repository } from 'typeorm';


@Injectable()
export class SharedPrefecturesService {
  constructor(
    @InjectRepository(Prefecture)
    private prefecturesRepository: Repository<Prefecture>,
  ) {}

  findAll(): Promise<PrefectureResponseDto[]> {
    return this.prefecturesRepository.find({
      select: [
        'id',
        'm_areas_id',
        'name'
      ],
    })
  }

  findOne(id: number) {
    return `This action returns a #${id} sharedPrefecture`;
  }
}
