import sequalize from 'sequelize'
export default {
    schemaName: 'markets',
    schema: {
        name: { type: sequalize.STRING, unique: true},
    }

}