const { Schema, model } = require('mongoose');
const {ObjectId} = Schema;
const bcrypt = require('bcryptjs');

const userSchema = new Schema({
    _id: { type: ObjectId },
    username: { type: String, required: true },
    password: { type: String, required: true }
});

//Schema methods

userSchema.methods = {
    checkPassword: function(password) {
        return bcrypt.compareSync(password, this.password);
    },
    hashPassword: function(password) {
        return bcrypt.hashSync(password, 10);
    }
}

// Pre saving
userSchema.pre('save', function(next) {
    if(!this.password) {
        next();
    } else {
        this.password = this.hashPassword(this.password);
        next();
    }
});

module.exports = model('User', userSchema);