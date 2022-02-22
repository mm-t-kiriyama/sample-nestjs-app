import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { City } from './entities/city.entity';

@Injectable()
export class CitiesService {
  constructor(
    @InjectRepository(City)
    private citiesRepository: Repository<City>
  ) {}

  findAll(): Promise<City[]> {
    return this.citiesRepository.find()
  }

  findById(id: number): Promise<City> {
    return this.citiesRepository.findOne(id)
  }

  findByPrefectureId(id: number): Promise<City[]> {
    return this.citiesRepository.find({m_prefecture_id: id})
  }
}
