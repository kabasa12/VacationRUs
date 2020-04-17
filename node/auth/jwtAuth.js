require('dotenv').config();
const jwt = require('jsonwebtoken');
const con = require('../utils/database');
const refresh = require('./tokenRefresh');

module.exports = authenticateToken = async (req, res, next) => {

    const cookies = req.cookies
    console.log(req)
    if (cookies['access-token'] == null) return res.sendStatus(401)

    jwt.verify(cookies['access-token'], process.env.ACCESS_TOKEN_SECRET, async (err, user) => {
        if (err && !cookies['refresh-token']) return res.sendStatus(403)
        else if (err && cookies['refresh-token']) {
            try {
                refresh(req, res, cookies['refresh-token']);
            }
            catch (err) {
                res.sendStatus(err);
            }
        }

        try {
            req.user = await bringUserType(user);
            next();
        }
        catch (err) {
            res.sendStatus(err);
        }
    });
}

bringUserType = async (user) => {
    let _user = { ...user };
    let query = `SELECT role_id
                   FROM users
                  WHERE id = ?`;

    try {
        let q = await con.execute(query, [user.id])
        if (!q[0][0]) throw 403;

        _user.role_id = q[0][0].role_id;
    }
    catch (err) {
        if (typeof err === 'number')
            throw err;
        else
            throw 500;

    };

    return _user;
}

