
async function getMarkets (req, res) {
    try {
        const { offset = 0, limit = 20 } = req.query;
        let markets = await global.MARKETS.findAll({ raw: true, offset, limit });
        res.send(markets);
    } catch (e) {
        console.error(e)
    }

}


export default {
    method: 'get',
    route: '/getMarkets',
    handler: getMarkets
}