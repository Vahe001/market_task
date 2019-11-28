import sequalize from 'sequelize'

export default {
    schemaName: 'products',
    schema: {
        name: sequalize.STRING,
        type: sequalize.STRING,
        size: sequalize.INTEGER,
        price: sequalize.INTEGER,
        quantity: sequalize.INTEGER,
        color: sequalize.STRING,
        marketId: {
            type: sequalize.INTEGER,
            references: {
                model: {
                    tableName: "markets",
                    schema: global.MARKETS
                },
                key: "id"
            },
            allowNull: false
        }
    }

}