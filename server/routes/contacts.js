const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Contact = require('../models/contact');

router.post('/message', (req, res) => {
    const { name, email, message } = req.body;
    const newContact = new Contact({
        _id: new mongoose.Types.ObjectId,
        name,
        email,
        message
    });
    newContact.save()
        .then(() => {
            res.status(201).json({
                msg: 'CarliC has received your message!'
            })
        })
        .catch(err => res.status(500).json({
            msg: 'Couldn´t send your message'
        }))
});

module.exports = router;