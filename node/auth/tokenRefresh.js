const jwt = require('jsonwebtoken');
const con = require('../utils/database');

module.exports = tokenRefresh = async (req, res, token) => {

    const query = `SELECT * 
                     FROM tokens
                    WHERE token = ?`;

    try {
        let q = await con.execute(query, [token])
        if (!q[0][0]) throw 403;

        jwt.verify(token, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
            const _user = {
                email: user.email,
                id: user.id,
            };
            req.cookies.token = jwt.sign(_user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '60m' });
            return _user;
        });

    }
    catch (err) {
        if(err != 403)
            throw 500;
        else
            throw 403;
    };
};