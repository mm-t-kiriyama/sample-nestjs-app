import { ApiProperty } from '@nestjs/swagger';

export class PrefectureResponseDto {
  @ApiProperty({ example: 27, description: '都道府県ID' }) // OpenAPI example, description に相当
  readonly id: number;

  @ApiProperty({ example: 7, description: '都道府県に紐づくエリアID' })
  m_areas_id?: number;

  @ApiProperty({ example: '大阪府', description: '都道府県名' })
  name: string;

  @ApiProperty({ example: 'おおさかふ', description: '都道府県名_ひらがな' })
  name_hiragana?: string;

  @ApiProperty({ example: 'オオサカフ', description: '都道府県名_カタカナ' })
  name_katakana?: string;

  @ApiProperty({ example: 'osaka', description: '都道府県名_カタカナ' })
  name_roman?: string;
}
