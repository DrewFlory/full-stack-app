const express       = require('express');
const routineRouter = express.Router();
const Routine         = require('../models/routineModel');
const bcrypt        = require('bcryptjs');
const ensureLogin   = require('connect-ensure-login');
const passport      = require('passport');

routineRouter.get('/myroutine', (req, res, next)=>{
    res.render('userViews/routinePage', {theUser: req.user})
})

// routineRouter.post('myroutine/create', (req, res, next)=>{
//     User.find({$push: {routine: req.body}})
//     .then((theRoutine)=>{
//         res.redirect('/userViews/profilePage', {theRoutine: theRoutine})
//     })
// })

// routineRouter.post('/mypage/myroutine/create',ensureLogin.ensureLoggedIn('/'), (req, res, next)=>{
//     User.find({$push: {routine: req.body}})
//     .populate("routine");

 
//     Routine.findByIdAndUpdate(req.params.id, {$push: {routines: entireRoutine}})
//     .then((response)=>{
//         res.redirect(`/mypage/${req.params.id}`)
 
//     })
//     .catch((err)=>{
//         next(err);
//     });
// //  });



module.exports = routineRouter;