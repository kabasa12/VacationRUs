const con = require('../utils/database');
const userService = require('../controllers/usersController');
const bcrypt = require('bcrypt');
const saltRounds = 10

exports.login = async (req, res, next) => {
    const { email, password } = req.body;
    
    let user = [];
    try {
        if(!email || !password) return Promise.reject('email and password are required!');
        console.log(email + ' ' + password);
        
        user = await userService.getUserByEmailLogin(email);
        user = user[0];
        console.log(user.password);

        if(!user) return Promise.reject('Invalid email or password');
        
        const match = await bcrypt.compare(password, user.password);
        console.log(match);
        if (!match) return Promise.reject('Invalid email or password');

    } catch (err) {
        user = err.message;
    }
     res.send(user);
}

exports.signUp = async (req, res, next) => {
    const { first_name,last_name,email, password} = req.body;
    let user = [];
    try {
        if(!first_name || !last_name || !email || !password) 
        return Promise.reject('All fields are required!');

        const hash = await bcrypt.hash(password,saltRounds);
        let newUser = {first_name:first_name,
                       last_name:last_name,
                       email:email,
                       password:hash,
                       role_id:2}
        user = await userService.insertUserSignUp(newUser);
        user = user[0];
        
    } catch (err) {
        user = err.message;
    }
    res.send(user);
}