const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs');

const { randomNumber } = require('../helpers/libs');

const Post = require('../models/post');

router.get('/', async (req, res) => {
    const posts = await Post.find().exec();
    res.status(200).json(posts);
});

router.post('/adding-file', async (req, res) => {
    if (req.file === null) {
        console.log(Object.keys(req))
    } else {
    const savePost = async () => {
        const imgUrl = randomNumber();
        const image = await Post.find({imageUrl: imgUrl});
        if (image.length > 0) {
            savePost();
        } else {
            const { title, content, description } = req.body;
            const imageTempPath = req.file.path;
            const ext = path.extname(req.file.originalname).toLowerCase();
            const targetPath = path.resolve(`./client/src/images/temp/${imgUrl}${ext}`)

            if (ext === '.png' || ext === '.jpg' || ext === '.jpeg' || ext === '.gif') {
                await fs.rename(imageTempPath, targetPath, (err) => {
                    if (err) {
                        console.log('there was an error in rename' + err)
                    } else {
                        console.log('rename went good')
                    }
                });

                const newPost = new Post({
                    _id: new mongoose.Types.ObjectId,
                    title,
                    description,
                    content,
                    imageUrl: imgUrl + ext
                });

                newPost.save()
                    .then(result => {
                        console.log(result)
                    }).catch(err => console.log(err))

            } else {
                await fs.unlink(imageTempPath, (err) => {
                    if (err) {
                        console.log('couldnt unlink')
                    } else {
                        console.log('We unlink the file')
                    }
                })
            }

        }
    }
    savePost();
    }
})

router.get('/:slug', async (req, res) => {
    const post = await (await Post.findOne({slug: req.params.slug}));
    res.status(200).json(post);
})

router.post('/new-post', async (req, res) => {
    const { title, description, content } = req.body;
    const newPost = new Post({
        _id: new mongoose.Types.ObjectId,
        title,
        description,
        content,  
    });
    newPost.save()
        .then(post => {
            res.status(201).json({
                msg: 'new post created',
                post: post
            });
        }).catch(err => {
            res.status(500).json({
                msg: 'Couldn´t create new post. Please try again',
                errorMsg: err
            });
        });
});

router.delete('/:slug', async (req, res) => {
    await Post.findOneAndRemove({slug: req.params.slug})
            .then(() => {
                res.status(200).json({
                    msg: 'post deleted'
                });
            })
            .catch(err => {
                res.status(500).json({
                    msg: 'Couldn´t delete your post. Please try again.',
                    errorMsg: err
                });
            });
});

module.exports = router;