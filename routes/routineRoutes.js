const express       = require('express');
const routineRouter = express.Router();
const Routine         = require('../models/routineModel');
const bcrypt        = require('bcryptjs');
const ensureLogin   = require('connect-ensure-login');
const passport      = require('passport');

routineRouter.get('/myroutine', (req, res, next)=>{
    res.render('userViews/routinePage', {theUser: req.user})
})

routineRouter.get('/mypage/myroutine/:id/new', (req, res, next)=>{
    Routine.findById(req.params.id)
    .then((theRoutine)=>{
        res.render('userViews/profilePage')
    })
})

routineRouter.post('/mypage/myroutine/create',ensureLogin.ensureLoggedIn('/'), (req, res, next)=>{
    const entireRoutine= {};
    entireRoutine.workout = req.body.Workout;
    entireRoutine.weigth = req.body.Weight;
    entireRoutine.reps = req.body.Reps;
    entireRoutine.sets = req.body.Sets;
 
 
    Routine.findByIdAndUpdate(req.params.id, {$push: {routines: entireRoutine}})
    .then((response)=>{
        res.redirect(`/mypage/${req.params.id}`)
 
    })
    .catch((err)=>{
        next(err);
    });
 });



module.exports = routineRouter;