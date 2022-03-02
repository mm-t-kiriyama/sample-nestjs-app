import { Entity } from "typeorm";
import { JobOffer } from "../../../common/job-offers/entities/job-offer.entity";

@Entity('m_job_offers')
export class IryouJobOffer extends JobOffer {
    // TODO: 求人プロパティに医療の差分があるものを記述する
}