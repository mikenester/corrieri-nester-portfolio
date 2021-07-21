const express = require('express');
const router = express.Router();
const User = '../models/User';
const {Post} = require('../models/Post');


// get all 'Tweets'
router.get('/', async (req, res) => {
    const posts = await Post.find().sort({ date: -1});
    
    if (!posts) {
        res.status(500).json({success: false})
    }
    res.send(posts);
})

//get 'Tweet' by ID
router.get('/:id', async (req, res) => {
    const postID = await Post.findById(req.params.id);

    if (!postID) {
        res.status(500).json({success: false})
    }
    res.send(postID);

})