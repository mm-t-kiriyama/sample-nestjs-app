import { ApiHideProperty, ApiProperty } from "@nestjs/swagger";
import { Column, PrimaryGeneratedColumn, Entity, OneToOne, JoinColumn, ManyToOne } from "typeorm";
import { Prefecture } from "../../prefectures/entities/prefecture.entity";

@Entity('m_cities')
export class City {
    @ApiProperty({example: 27100, description: '市区町村ID'})
    @PrimaryGeneratedColumn({type: 'int', comment: '市区町村ID'})
    readonly id: number;

    @ApiProperty({example: 27, description: '市区町村に紐づく都道府県ID'})
    @Column({type: 'int', length: 11 ,comment: '都道府県ID'})
    m_prefecture_id: number;

    @ApiProperty({example: '大阪市', description: '市区町村名'})
    @Column({type: 'varchar', length: 255, comment: '市区町村名'})
    name: string

    @ApiProperty({example: 'ひらがな', description: '市区町村名_ひらがな'})
    @Column({type: 'varchar', length: 255, comment: '市区町村名_ひらがな'})
    name_hiragana: string;

    @ApiProperty({example: 'オオサカシ', description: '市区町村名_カタカナ'})
    @Column({type: 'varchar', length: 255, comment: '市区町村名_カタカナ'})
    name_katakana: string

    @ApiProperty({example: 27100, description: '特別区,行政区が属する政令指定都市の市区町村ID'})
    @Column({type: 'varchar', length: 255, comment: '市区町村名_カタカナ'})
    parent_city_id: number|null

    @ApiProperty({example: true, description: '政令指定都市フラグ'})
    @Column({type: 'boolean', comment: '市区町村名_カタカナ'})
    is_designated: boolean

    @ApiHideProperty()
    @Column({type: 'bigint', length: 20, comment: '作成日'})
    created_at: number

    @ApiHideProperty()
    @Column({type: 'bigint', length: 20, comment: '更新日'})
    updated_at: number

    @ApiHideProperty()
    @Column({type: 'varchar', length: 20, comment: '作成者'})
    created_by: string

    @ApiHideProperty()
    @Column({type: 'varchar', length: 20, comment: '更新者'})
    updated_by: string

    /**
     * リレーションを定義
     * NOTE: 複数の市区町村は1つの都道府県を持つ = ManyToOne
     * SEE: https://orkhan.gitbook.io/typeorm/docs/many-to-one-one-to-many-relations
     */
    @ManyToOne(() => Prefecture, (prefecture) => prefecture.city, {
        createForeignKeyConstraints: false,
        persistence: false,
    })
    @JoinColumn({
        name: 'm_prefecture_id',
        referencedColumnName: 'id'
    })
    readonly prefecture?: Prefecture
}