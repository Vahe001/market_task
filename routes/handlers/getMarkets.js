
async function signup (req, res) {
    try {
        const { username, role } = req.body;
        console.log('---------', req.body)
        let newUser = new global.users({ username, role })
        newUser.save();
        console.log('newUser - ', newUser);
        res.send(newUser);
    } catch (e) {
        console.error(e)
    }

}


export default {
    method: 'post',
    route: '/signup',
    handler: signup
}