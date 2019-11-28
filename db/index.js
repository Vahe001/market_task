import Sequelize from 'sequelize';
import market from "./market";
import product from "./products";

export default async function () {
    try {
        const sequelize = new Sequelize(process.env.DB);
        global.MARKETS = sequelize.define(market.schemaName, market.schema, { freezeTableName: true });
        await global.MARKETS.sync({});
        global.PRODUCTS = sequelize.define(product.schemaName, product.schema, { freezeTableName: true });
        await global.PRODUCTS.sync({});

        global.MARKETS.hasMany( global.PRODUCTS, {as : 'product' });
        global.PRODUCTS.belongsTo(global.MARKETS)

    } catch (err) {
        console.error(err)
    }
}
