const User = require('../models/user');

module.exports.getRegister = async(req,res)=>{
    res.render('users/register')
}

module.exports.registerNewUser = async(req,res,next)=>{
    try {
        const {email,username,password} = req.body;
        const user = new User({email,username});
        const regUser = await User.register(user,password);
        req.login(regUser,err=>{
            if(err)
            {
                return next(err);
            }
            req.flash('success','Welcome to Homely');
            res.redirect('/homes');
        })
        
    } catch (error) {
        req.flash('error',error.message);
        res.redirect('/register');
    }
}

module.exports.getLogin = async(req,res)=>{
    res.render('users/login');
}

module.exports.loginUser = async(req,res)=>{
    req.flash('success','Welcome Back');
    res.redirect('/homes');
}


module.exports.logoutUser = (req, res, next) => {
    req.logout((err) => {
        if (err) {
            return next(err);
        }
        req.flash('success', 'Goodbye!');
        res.redirect('/login');
    });
}