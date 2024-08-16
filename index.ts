import { hostname } from 'node:os';
import { Investment } from './models/investments.model';
import { Sequelize } from 'sequelize-typescript';
import { DATABASE_URL } from '../config';

export const DBmodels = {
    Investment,
}
const models = Object.values(DBmodels)

export class ModelsConn {

    private models: typeof DBmodels;
    private sequelize: Sequelize;
    private databaseUrl: string;

    constructor(databaseUrl?: string) {
        if (!databaseUrl) throw new Error('database url is not defined');
        this.databaseUrl = databaseUrl;
        console.info('Init DB conn: ' + this.databaseUrl);
        this.sequelize = new Sequelize(this.databaseUrl ,{
            dialect: 'postgres',
            dialectOptions: {
                application_name: hostname(),
            },
            models: models,
            
        });
        this.models = DBmodels
    }

    public connect() {
        return new Promise<void>((resolve, reject) => {
            this.sequelize.authenticate().then(() => {
                console.info('DB connected! - ' + this.databaseUrl);
                resolve();
            }).catch((error) => {
                console.error('Unable to connect to DB - ' + this.databaseUrl, error);
                reject(error);
            });
        });
    }

    public getModels() {
        return this.models;
    }

    public async rawQuery(query: string): Promise<any> {
        const resQuery = await this.sequelize.query(query);
        return resQuery[0];//data is in the first element of the array
    }
}

export const modelsConn = new ModelsConn(DATABASE_URL);