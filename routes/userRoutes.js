const express     = require('express');
const userRouter  = express.Router();
const User        = require('../models/userModel');
const bcrypt      = require('bcryptjs');
const ensureLogin = require('connect-ensure-login');
const passport    = require('passport');

userRouter.get('/signup', (req, res, next)=>{
    res.render('userViews/signupPage');
})

userRouter.post('/signup', (req, res, next)=>{
    const thePassword = req.body.password;
    const theUsername = req.body.username;
    
    if(thePassword === "" || theUsername === ""){
        res.render('userViews/signupPage', {errorMessage: "Make sure to fill out everyhting correctly"})
        return;
    }

    User.findOne({'username': theUsername})
    .then((responseFromDB)=>{
        if(responseFromDB !== null){
            res.render('userViews/signupPage',{errorMessage: `Sorry the username ${theUsername} is already taken`})
            return;
        }
   
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(thePassword, salt);

    User.create({username: theUsername, password: hashedPassword})
    .then((response)=>{
        res.redirect('/userViews/profilePage/:id');
    })
    .catch((err)=>{
        next(err);
    }) 
})

});

userRouter.get('/', (req, res, next)=>{
    res.render('index', { "message": req.flash("error") });
});

userRouter.post('/login', passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/",
    failureFlash: true,
    passReqToCallBack: true
}))

userRouter.get("/logout", (req, res, next)=>{
    req.logout();
        res.redirect("/")
});
userRouter.get('/:id' ,(req, res, next)=>{
    User.findById(req.params.id)
    res.render('userViews/profilePage');
})










module.exports = userRouter;