import { Column, CreatedAt, Model, Table, UpdatedAt, PrimaryKey, AutoIncrement, DataType } from "sequelize-typescript";

@Table({tableName: 'investments'})
export class Investment extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column(DataType.INTEGER)
    declare id: number;

    @Column(DataType.INTEGER)
    declare value: number;

    @Column(DataType.DECIMAL)
    declare annual_rate: number;

    @Column(DataType.DATE)
    declare confirm_at: Date;

    @CreatedAt
    declare created_at: Date;

    @UpdatedAt
    declare updated_at: Date;
}