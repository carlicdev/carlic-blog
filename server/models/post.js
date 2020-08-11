const { Schema, model } = require('mongoose');
const { ObjectId } = Schema;
const slugify = require('slugify');
const marked = require('marked');
const createDomPurify = require('dompurify');
const { JSDOM } = require('jsdom');
const dompurify = createDomPurify(new JSDOM().window);

const postSchema = new Schema({
    _id: { type: ObjectId },
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
    imageUrl: { type: String },
    description: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    content: { type: String, required: true },
    sanitizedHtml: { type: String }
});

postSchema.pre('validate', function(next) {
    if(this.title) {
        this.slug = slugify(this.title, {lower: true, strict: true});
    }
    if (this.content) {
        this.sanitizedHtml = dompurify.sanitize(marked(this.content));
    }
    next();
});

module.exports = model('Post', postSchema);