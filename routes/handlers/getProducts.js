
async function getProducts (req, res) {
    try {
        const { offset = 0, limit = 20, marketId } = req.query;
        let where;
        if(marketId)
            where = { id: marketId }
        let products = await global.PRODUCTS.findAll({
            raw: true,
            include: [{
                model: global.MARKETS,
                as: 'market',
                where,
                required: true
            }],
            offset,
            limit});
        res.send(products);
    } catch (e) {
        console.error(e)
    }

}


export default {
    method: 'get',
    route: '/getProducts',
    handler: getProducts
}