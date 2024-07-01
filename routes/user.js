const express = require('express');
const router = express.Router();
const wrapAsync = require('../utilities/wrapAsync');
const passport = require('passport');
const {getRegister,registerNewUser,getLogin,loginUser,logoutUser} = require('../controller/users');


router.route('/register')
    .get(wrapAsync(getRegister))
    .post(wrapAsync(registerNewUser))

router.route('/login')
    .get(wrapAsync(getLogin))
    .post(passport.authenticate('local',{failureFlash:true,failureRedirect:'/login'}),wrapAsync(loginUser))

router.get('/logout',logoutUser); 


module.exports = router;

