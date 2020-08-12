const User = require('../models/user');
const LocalStrategy = require('passport-local').Strategy;

const strategy = new LocalStrategy(
    {
        usernameField: 'username',
        passwordField: 'password'
    },
    async function(username, password, done) {
        await User.findOne({username: username}, (err, user) => {
            if (err) { return done(err) }
            if (!user) { return done(null, false, { msg: 'incorrect username'})}
            if (!user.checkPassword(password)) {
                return done(null, false, { msg: 'incorrect password'});
            }
            return done(null, user);
              });
    });

    module.exports = strategy;