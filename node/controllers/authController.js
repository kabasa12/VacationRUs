const con = require('../utils/database');
const userService = require('../controllers/usersController');
const bcrypt = require('bcrypt');
const saltRounds = 10

exports.login = async (req, res, next) => {
    let response = {
        success: false,
    }
    let resCode = 500;
    
    const { email, password } = req.body;
    
    let user = [];
    try {
        if(!email || !password) {
            response.err = 'Email and password are required!';
            resCode = 400;
            res.status(resCode).json(response);
        }

        user = await userService.getUserByEmailLogin(email);
        user = user[0];

        if(!user) {
            response.err = 'Invalid email or password!';
            resCode = 401;
            res.status(resCode).json(response);
        }
        
        const match = await bcrypt.compare(password, user.password);

        if (match) {
            
            //create token
            response.success = true;
            resCode = 200;
        } else {
            response.err = 'Invalid email or password!';
            resCode = 401;
            res.status(resCode).json(response);
        }

    } catch (err) {
        response.err = err.message;
    }
     res.send(response);
}

exports.signUp = async (req, res, next) => {
    let response = {
        success: false,
    }
    let resCode = 500;

    const { first_name,last_name,email, password} = req.body;
    let user = [];
    try {
        if(!first_name || !last_name || !email || !password) {
            response.err = 'All fields are required!';
            resCode = 400;
            res.status(resCode).json(response);
        }
        
        const hash = await bcrypt.hash(password,saltRounds);
        let newUser = {first_name:first_name,
                       last_name:last_name,
                       email:email,
                       password:hash,
                       role_id:2}

        user = await userService.insertUserSignUp(newUser);
        user = user[0];
        
        response.success = true;
        response.data = "User Created Successfully";
        resCode = 200;    
        
    } catch (err) {  
        if (err.code == 'ER_DUP_ENTRY') {
            response.err = err.message;
            resCode = 409
        }else {
            response.err = "Please try again later";
            resCode = 500
        }
        
    }
    res.send(response);
}