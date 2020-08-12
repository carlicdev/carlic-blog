const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('../passport/passport');
 
const User = require('../models/user');

router.post('/register', (req, res) => {
    const { username, password } = req.body;
    const newUser = new User({
        _id: new mongoose.Types.ObjectId,
        username,
        password,
    });

    newUser.save()
        .then(result => console.log('registered'))
        .catch(err => console.log(err));
});

// Login
router.post('/login', 
            passport.authenticate('local'), (req, res) => {
                console.log('Authenticated');
                res.send({user: req.user}).status(200);
            });

// Get session
router.get('/user', (req, res) => {
    req.user ?
    res.json({user: req.user})
    :
    res.json({msg: 'no user'});
});            

module.exports = router;