const express         = require('express');
const exerciseRouter  = express.Router();
const Exercise        = require('../models/exerciseModel');
const bcrypt          = require('bcryptjs');
const ensureLogin     = require('connect-ensure-login');
const passport        = require('passport');

exerciseRouter.get('/exercises/1', ensureLogin.ensureLoggedIn('/'), (req, res, next)=>{
    Exercise.find().limit(15)
    .then((listOfExercises)=>{
        res.render('userViews/exercisesPage', {listOfExercises, next: 2});
    })
    .catch((err)=>{
        next(err);
    })
})

exerciseRouter.get('/exercises/2', ensureLogin.ensureLoggedIn('/'), (req, res, next)=>{
    Exercise.find().skip(15).limit(15)
    .then((listOfExercises)=>{
        res.render('userViews/exercisesPage', {listOfExercises,  prev: 1, next: 3});
    })
    .catch((err)=>{
        next(err);
    })
})

exerciseRouter.get('/exercises/3', ensureLogin.ensureLoggedIn('/'), (req, res, next)=>{
    Exercise.find().skip(30).limit(15)
    .then((listOfExercises)=>{
        res.render('userViews/exercisesPage', {listOfExercises,  prev: 2});
    })
    .catch((err)=>{
        next(err);
    })
})

exerciseRouter.get('/exercises/:id', ensureLogin.ensureLoggedIn('/'), (req, res, next)=>{
    const id = req.params.id;
    Exercise.findById(id)
    .then((theExercise)=>{
        res.render('userViews/exerciseDetails', {theExercise});
    })
    .catch((err)=>{
        next(err);
    })
})


module.exports = exerciseRouter;