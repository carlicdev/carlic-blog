const { Schema, model } = require('mongoose');
const { ObjectId } = Schema;

const contactSchema = new Schema({
    _id: { type: ObjectId },
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true }
});

module.exports = model('Contact', contactSchema);