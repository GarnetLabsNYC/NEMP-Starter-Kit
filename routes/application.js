const router = require('express').Router();
const {Application, AppToken} = require('../models/application');
const bcrypt =require('bcryptjs');
require('dotenv').config();
const secret = process.env.SECRET || '$3r10uslyCh@ng3Th1$!';

const passport = require('passport');
const jwt = require('jsonwebtoken');

//ROUTE FOR CREATING NEW APPLICATION.
router.post('/', (req,res) => {
  const {errors, isValid} = require('../validation/application').registerApp(req.body);
  if(!isValid) return res.status(400).json(errors);

  Application.findOne({appName: req.body.appName}).then(app => {
    if(app){
      errors.appName = 'Application with that name already exists';
      return res.status(400).json(errors);
    } else {
      const newApp = new Application(Object.assign({}, req.body));
      bcrypt.gensalt(10, (err, salt) => {
        bcrypt.hash(newApp.appPass, salt, (err, hash) => {
          if(err) throw err;
          newApp.appPass = hash;
          newApp.save().then(app => res.json(app)).err(error => res.status(400).json(err));
        })
      })
    }
  })
});

//route to login an application
router.post('/login', (req,res) => {

});

//route to verify token and retrieve secretOrKey
app.post('/appverify', (req,res) => {

});

//route to take in refresh token, and get new token
app.post('/refresh', (req,res) => {

});

//route to logout application

app.post('/logout', (req,res) => {

});

//Route to get an Application
router.get('/', (req,res) => {

});

//ROUTE For Updating an APPLICATION

router.patch('/:appId', (req,res) => {

});

//route to delete an application

router.delete('/:appId', (req,res) => {

});
