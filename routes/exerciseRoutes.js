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
        res.render('userViews/exercisesPage', {listOfExercises,  prev: 2, next: 4});
    })
    .catch((err)=>{
        next(err);
    })
})

exerciseRouter.get('/exercises/4', ensureLogin.ensureLoggedIn('/'), (req, res, next)=>{
    Exercise.find().skip(45).limit(15)
    .then((listOfExercises)=>{
        res.render('userViews/exercisesPage', {listOfExercises,  prev: 3});
    })
    .catch((err)=>{
        next(err);
    })
})

exerciseRouter.get('/exercises/chest', ensureLogin.ensureLoggedIn('/'), (req, res, next)=>{
    Exercise.find({
        'category': {$eq: ['Chest']}
    })
    
    .then((listOfExercises)=>{
       
        res.render('userViews/exercisesPage', {listOfExercises});
    })
    .catch((err)=>{
        next(err);
    })
})

exerciseRouter.get('/exercises/back', ensureLogin.ensureLoggedIn('/'), (req, res, next)=>{
    Exercise.find({
        'category': {$eq: ['Back']}
    })
    .then((listOfExercises)=>{
        res.render('userViews/exercisesPage', {listOfExercises});
    })
    .catch((err)=>{
        next(err);
    })
})

exerciseRouter.get('/exercises/arms', ensureLogin.ensureLoggedIn('/'), (req, res, next)=>{
    Exercise.find({
        'category': {$eq: ['Arms']}
    })
    .then((listOfExercises)=>{
        res.render('userViews/exercisesPage', {listOfExercises});
    })
    .catch((err)=>{
        next(err);
    })
})

exerciseRouter.get('/exercises/legs', ensureLogin.ensureLoggedIn('/'), (req, res, next)=>{
    Exercise.find({
        'category': {$eq: ['Legs']}
    })
    .then((listOfExercises)=>{
        res.render('userViews/exercisesPage', {listOfExercises});
    })
    .catch((err)=>{
        next(err);
    })
})

exerciseRouter.get('/exercises/traps', ensureLogin.ensureLoggedIn('/'), (req, res, next)=>{
    Exercise.find({
        'category': {$eq: ['Traps']}
    })
    .then((listOfExercises)=>{
        res.render('userViews/exercisesPage', {listOfExercises});
    })
    .catch((err)=>{
        next(err);
    })
})

exerciseRouter.get('/exercises/shoulder', ensureLogin.ensureLoggedIn('/'), (req, res, next)=>{
    Exercise.find({
        'category': {$eq: ['Shoulders']}
    })
    .then((listOfExercises)=>{
        res.render('userViews/exercisesPage', {listOfExercises});
    })
    .catch((err)=>{
        next(err);
    })
})

exerciseRouter.get('/exercises/abs', ensureLogin.ensureLoggedIn('/'), (req, res, next)=>{
    Exercise.find({
        'category': {$eq: ['Abs']}
    })
    .then((listOfExercises)=>{
        res.render('userViews/exercisesPage', {listOfExercises});
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