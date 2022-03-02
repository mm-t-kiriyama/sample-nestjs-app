import { IsString, IsInt } from 'class-validator';

export class CreatePrefectureDto {
  @IsString()
  name: string;

  @IsInt()
  m_area_id: number;
}
