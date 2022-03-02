import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('m_job_offers')
export class JobOffer {
    @ApiProperty()
    @PrimaryGeneratedColumn({ type: 'int', comment: '求人ID' })
    readonly id: number;

    @Column()
    catch_phrase: string
}