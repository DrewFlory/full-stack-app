const express       = require('express');
const routineRouter = express.Router();
const Routine         = require('../models/routineModel');
const bcrypt        = require('bcryptjs');
const ensureLogin   = require('connect-ensure-login');
const passport      = require('passport');

routineRouter.get('/myroutine', (req, res, next)=>{
    res.render('userViews/routinePage', {theUser: req.user})
})

routineRouter.get('/mypage/myroutine/new', (req, res, next)=>{
    Routine.findById()
})










module.exports = routineRouter;