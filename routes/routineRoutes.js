const express       = require('express');
const routineRouter = express.Router();
const Routine       = require('../models/routineModel');
const bcrypt        = require('bcryptjs');
const ensureLogin   = require('connect-ensure-login');
const passport      = require('passport');

routineRouter.get('/myroutine', (req, res, next)=>{
    res.render('userViews/routinePage', {theUser: req.user})
})

// Creates my Routines and Puts Them On My Page
routineRouter.post('/myroutine/create',ensureLogin.ensureLoggedIn('/'), (req, res, next)=>{
   const newRoutine = new Routine({
       Workout: req.body.workout,
       Weight: req.body.weight,
       Reps: req.body.reps,
       Sets: req.body.sets,
       Details: req.body.details,
       Userid: req.user._id
   })
   newRoutine.save()
   .then((response)=>{
       res.redirect('/mypage')
   })
   .catch((err)=>{
       next(err);
   })
})

// Deletes My Routines When I Click My 'Completed Button'
routineRouter.post('/routines/delete', (req, res, next) => {
    Routine.find({'Userid': req.user._id})
    .then( allFoundRoutines => {
        allFoundRoutines.forEach(oneRoutine => {
            Routine.findByIdAndRemove(oneRoutine._id)
            .then(() => {
                res.redirect('/mypage')
            })
            .catch( err => next(err) )
        })
    })
    .catch( err => next(err) )
})

//Edit My Routines When I Click On 'Edit' Icon
routineRouter.get('/routines/:id/edit/', (req, res, next)=>{
    Routine.findById(req.params.id)
    .populate("Userid")
    .then((theRoutine)=>{      
             res.render('userViews/editRoutine', {theRoutine: theRoutine})
         })
         .catch((err)=>{
             next(err)
         })
    })

 routineRouter.post('/routines/:id/update', (req, res, next)=>{
    Routine.findByIdAndUpdate(req.params.id, {
       Workout: req.body.workout,
       Weight: req.body.weight,
       Reps: req.body.reps,
       Sets: req.body.sets,
       Details: req.body.details,
       Userid: req.user._id
    })
    .then((theRoutine)=>{
        res.redirect('/mypage')
    })
    .catch((err)=>{
        next(err);
    })  
})



module.exports = routineRouter;