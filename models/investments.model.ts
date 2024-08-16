import { Column, CreatedAt, Model, Table, UpdatedAt, PrimaryKey, AutoIncrement, DataType } from "sequelize-typescript";

@Table({tableName: 'investments'})
export class Investment extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column(DataType.NUMBER)
    declare id: number;

    @Column
    declare value: string;

    @Column
    declare annual_rate: number;

    @Column
    declare confirm_at: Date;

    @CreatedAt
    declare created_at: Date;

    @UpdatedAt
    declare updated_at: Date;
}