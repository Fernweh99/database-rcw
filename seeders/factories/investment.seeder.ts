import { modelsConn } from "../..";
import { Investment } from "../../models/investments.model";
import {faker} from '@faker-js/faker';
const models = modelsConn.getModels()

export const seedInvestments = async(number: number) => {
    const investments: any[] = [];

    for (let i = 0; i < number; i++) {
        investments.push({
            value: faker.number.int({min: 0, max: 100000}),
            annual_rate: faker.number.float({fractionDigits: 2, min: 0, max: 100}),
            confirm_at: faker.date.recent(),
            created_at: faker.date.between({from: '2020-01-01T00:00:00.000Z', to: '2022-01-01T00:00:00.000Z'})
        } as Investment)
    }

    await models.Investment.destroy({truncate: true})
    await models.Investment.bulkCreate(investments)
}