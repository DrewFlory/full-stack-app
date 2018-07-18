const express     = require('express');
const userRouter  = express.Router();
const User        = require('../models/userModel');
const Quote        = require('../models/quoteModel');
const bcrypt      = require('bcryptjs');
const ensureLogin = require('connect-ensure-login');
const passport    = require('passport');


userRouter.get('/mypage', (req, res, next)=>{
    // Get the count of all users
    Quote.count().exec(function (err, count) {

    // Get a random entry
    var random = Math.floor(Math.random() * count)
   
    // Again query all users but only fetch one offset by our random #
    Quote.findOne().skip(random).exec(
      function (err, result) {
        // Tada! random user
        console.log(result)
        res.render('userViews/profilePage', {theUser: req.user, result: result.quote})
      })
   })
})

userRouter.get('/users/signup', (req, res, next)=>{
    res.render('userViews/signupPage');
})

userRouter.post('/signup', (req, res, next)=>{
    const thePassword = req.body.password;
    const theUsername = req.body.username;
    const theName     = req.body.name;


    
    if(thePassword === "" || theUsername === "" || theName === ""){
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

    User.create({username: theUsername, password: hashedPassword, name: theName})
    .then((response)=>{
        console.log("blah: ", response)
        res.redirect('/');
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
    successRedirect: "/mypage",
    failureRedirect: "/",
    failureFlash: true,
    passReqToCallBack: true
}))

userRouter.get("/logout", (req, res, next)=>{
    req.logout();
        res.redirect("/")
});
// userRouter.get('/:id' ,(req, res, next)=>{
//     User.findById(req.params.id)
//     res.render('userViews/profilePage');
// })






module.exports = userRouter;