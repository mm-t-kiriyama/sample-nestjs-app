import { ApiProperty } from "@nestjs/swagger";
import { Column, PrimaryGeneratedColumn, Entity } from "typeorm";

@Entity('m_prefectures')
export class Prefecture {
    @ApiProperty({example: 1, description: '都道府県ID'})
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @Column()
    m_areas_id: number;

    @ApiProperty()
    @Column()
    name: string

    @ApiProperty()
    @Column()
    name_hiragana: string;

    @ApiProperty()
    @Column()
    name_katakana: string

    @ApiProperty()
    @Column()
    name_roman: string

    @ApiProperty()
    @Column()
    created_at: number

    @ApiProperty()
    @Column()
    updated_at: number

    @ApiProperty()
    @Column()
    created_by: string

    @ApiProperty()
    @Column()
    updated_by: string
}