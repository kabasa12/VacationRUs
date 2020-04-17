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
        u = err.message;
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