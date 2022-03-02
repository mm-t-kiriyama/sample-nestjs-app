import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { City } from './entities/city.entity';

@Injectable()
export class CitiesService {
  constructor(
    @InjectRepository(City)
    private citiesRepository: Repository<City>
  ) { }

  /**
   * SELECTする項目
   * NOTE: 定数として定義しておくと使い回すことが出来ます
   * @type {Array<(keyof)City[]>}
   */
  readonly SELECT_FIELDS : (keyof City)[] = ['id', 'name', 'name_hiragana', 'name_katakana', 'parent_city_id', 'is_designated']

  findById(id: number): Promise<City> {
    return this.citiesRepository.findOne({
      // select: ['カラム名'] でSELECTする項目を指定
      select: ['id', 'name', 'name_hiragana', 'name_katakana', 'parent_city_id', 'is_designated'],
      // where: { <カラム名>: <検索値>  } でWHERE句の条件を指定
      where: { id: id },
      // 関連のあるテーブルを含みたい場合は releations を定義する
      // relations: ['prefecture']
    })
  }

  /**
   * 都道府県IDに紐づく市区町村リストを取得する
   *  
   * @param {number} prefecture_id 都道府県ID
   * 
   * @returns {Promise<City[]>}
   */
  findByPrefectureId(prefecture_id: number): Promise<City[]> {
    /**
     * NOTE: 単純な条件であれば find メソッドで十分かなと思います
     *       複雑な検索条件の場合、クエリビルダを利用するのが良いかもしれません
     * SEE: https://orkhan.gitbook.io/typeorm/docs/find-options, https://orkhan.gitbook.io/typeorm/docs/select-query-builder
     * 
     */
    return this.citiesRepository.find({
      // select: ['カラム名'] でSELECTする項目を指定
      select: this.SELECT_FIELDS,
      // where: { <カラム名>: <検索値>  } でWHERE句の条件を指定
      where: { m_prefecture_id: prefecture_id }
    })
  }
}
