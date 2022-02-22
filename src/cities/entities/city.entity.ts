import { ApiProperty } from "@nestjs/swagger";
import { Column, PrimaryGeneratedColumn, Entity } from "typeorm";

@Entity('m_cities')
export class City {
    @ApiProperty()
    @PrimaryGeneratedColumn()
    id: number;

    @ApiProperty()
    @Column()
    m_prefecture_id: number;

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
    parent_city_id: number

    @ApiProperty()
    @Column()
    is_designated: boolean

    @Column()
    created_at: number

    @Column()
    updated_at: number

    @Column()
    created_by: string

    @Column()
    updated_by: string
}