import { ApiHideProperty, ApiProperty } from "@nestjs/swagger";
import { Column, PrimaryGeneratedColumn, Entity, OneToOne, JoinColumn, OneToMany } from "typeorm";
import { City } from "../../cities/entities/city.entity";

// @Entity('<テーブル名>')
@Entity('m_prefectures')
export class Prefecture {
    @ApiProperty({example: 27, description: '都道府県ID'}) // OpenAPI example, description に相当
    @PrimaryGeneratedColumn({type: 'int', comment: '都道府県ID'})
    readonly id: number;

    @ApiProperty({example: 7, description: '都道府県に紐づくエリアID'})
    @Column({type: 'int',comment: 'エリアID'})
    m_areas_id: number;

    @ApiProperty({example: '大阪府', description: '都道府県名'})
    @Column({type: 'varchar', length: 255, comment: '都道府県名'})
    name: string

    @ApiProperty({example: 'おおさかふ', description: '都道府県名_ひらがな'})
    @Column({type: 'varchar', length: 255, comment: '都道府県名_ひらがな'})
    name_hiragana: string;

    @ApiProperty({example: 'オオサカフ', description: '都道府県名_カタカナ'})
    @Column({type: 'varchar', length: 255, comment: '都道府県名_カタカナ'})
    name_katakana: string

    @ApiProperty({example: 'osaka', description: '都道府県名_カタカナ'})
    @Column({type: 'varchar', length: 255, comment: '都道府県名_ローマ字'})
    name_roman: string

    @ApiHideProperty() // OpenAPI に盛り込まないように設定
    @Column({type: 'bigint', comment: '作成日'})
    created_at: number

    @ApiHideProperty()
    @Column({type: 'bigint', comment: '作成日'})
    updated_at: number

    @ApiHideProperty()
    @Column({type: 'varchar', length: 20, comment: '作成者'})
    created_by: string

    @ApiHideProperty()
    @Column({type: 'varchar', length: 20, comment: '作成者'})
    updated_by: string

    /**
     * リレーションを定義
     * NOTE: 1つの都道府県は複数の市区町村を持つ = OneToMany
     * SEE: https://orkhan.gitbook.io/typeorm/docs/many-to-one-one-to-many-relations
     */
    @ApiHideProperty()
    @OneToMany(() => City, (city) => city.prefecture, {
        createForeignKeyConstraints: false,
        persistence: false,
    })
    readonly city: City[]

    // TODO: エリアとのリレーションを記載
}