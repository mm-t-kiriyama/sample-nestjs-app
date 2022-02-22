import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Prefecture } from './entities/prefecture.entity';
import { Repository } from 'typeorm';


@Injectable()
export class PrefecturesService {
  constructor(
    @InjectRepository(Prefecture)
    private prefecturesRepository: Repository<Prefecture>
  ) {}

  findAll() {
    return this.prefecturesRepository.find()
  }

  findById(id: number) {
    return this.prefecturesRepository.findOneOrFail(id)
  }
}