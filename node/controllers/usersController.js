const con = require('../utils/database');

exports.getUsers = async (req, res, next) => {
    let users = [];
    try {
        users = await con.execute(`SELECT * FROM users`);
        users = users[0];
    } catch (err) {
        users = err.message;
    }
    res.send(users);
}

exports.getUserById = async (req, res, next) => {
    let id = req.query.id;
    let user = [];
    try {
        user = await con.execute(`SELECT * FROM users WHERE id = "${id}"`);
        user = user[0];
    } catch (err) {
        user = err.message;
    }
    res.send(user);
}

exports.getUserByEmail = async (req, res, next) => {
    let email = req.query.email;

    let user = [];
    try {
        user = await con.execute(`SELECT * FROM users WHERE email = "${email}"`);
        user = user[0];
    } catch (err) {
        user = err.message;
    }
    res.send(user);
}

exports.getUserByEmailLogin = async (email) => {
    let user = [];
    try {
        user = await con.execute(`SELECT * FROM users WHERE email = "${email}"`);
        user = user[0];
        return user;
    } catch (err) {
        user = err.message;
        throw user;
    }
}

exports.insertUserSignUp = async (user) => {
    let u = []
    try {
        u = await con.execute("INSERT INTO users (first_name,last_name,email,password,role_id) VALUES (?,?,?,?,?)",
                              [user.first_name,user.last_name,user.email,user.password,user.role_id])
        u = u[0];
        
        return u;
    } catch (err) {
        u = err;
        throw u;
    }
}

exports.insertUser = async (req, res, next) => {
    
    let user = {
        first_name: req.query.first_name,
        last_name: req.query.last_name,
        email: req.query.email,
        password: req.query.password,
        role_id: req.query.role_id
    }

    let u = []
    try {
        u = await con.execute("INSERT INTO users (first_name,last_name,email,password,role_id) VALUES (?,?,?,?,?)",
                              [user.first_name,user.last_name,user.email,user.password,user.role_id])
        u = u[0];
    } catch (err) {
        u = err.message;
    }

    res.send(u)
}

exports.updateUserByid = async (req, res, next) => {
    let id = req.query.id;
    let user = {
        first_name: req.query.first_name,
        last_name: req.query.last_name,
        email: req.query.email,
        password: req.query.password,
        role_id: req.query.role_id
    }

    let u = []
    try {
        u = await con.execute(`UPDATE users 
                               SET first_name=?,last_name=?,
                               email=?,password=?,
                               role_id=?
                               WHERE id = ${id}`,
                               [user.first_name,user.last_name,user.email,user.password,user.role_id])
        u = u[0];
    } catch (err) {
        u = err.message;
    }

    res.send(u)
}

exports.getStatistics = async (req, res) => {
    let response = {
        success: false,
    }
    let code = 401;

    const query = `SELECT v.name as 'VacationName', COUNT(v.id) as OrderCount 
                     FROM vacations v LEFT JOIN users_vacation uv ON v.id = uv.vacation_id
                    GROUP BY v.id`

    try {
        const stat = await con.execute(query)

        response.data = stat[0];
        response.success = true;
        code = 201;
    }
    catch (err) {
        response.err = err;
        code = 500;
    }

    res.status(code).json(response)

}