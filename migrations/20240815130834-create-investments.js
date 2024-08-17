'use strict';

module.exports = {
    async up (queryInterface, Sequelize) {
        await queryInterface.createTable('investments', {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            value: {
                allowNull: false,
                type: Sequelize.INTEGER
            },
            annual_rate: {
                type: Sequelize.DECIMAL(5,2),
                allowNull: false
            },
            confirm_at: {
                allowNull: false,
                type: Sequelize.DATE
            },
            created_at: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updated_at: {
                allowNull: false,
                type: Sequelize.DATE
            }
        })
    },

    async down (queryInterface, Sequelize) {
        await queryInterface.dropTable('investments');
    }
};
