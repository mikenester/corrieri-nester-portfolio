const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    name: {
        type: String,
    },
    uploadIMG: {
        type: String,
    },
    text: {
        type: String,
        required: true,
    },
    userIMG: {
        type: String,
    },
    comments: [
        {
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User',
            },
            name: {
                type: String,
            },
            text: {
                type: String,
                required: true,
            },
            userIMG: {
                type: String,
            },
            date: {
                type: Date,
                default: Date.now
            },
        }
    ],
    likes: [
        {
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User'
            },
            count: {
                type: Number,
                required: true,
            }
        }
    ],
    date: {
        type: Date,
        default: Date.now,
    }
})

postSchema.virtual('id').get(function () {
    return this._id.toHexString();
})

postSchema.set('toJSON', {
    virtuals: true,
})

exports.Post = mongoose.model('Post', postSchema);
exports.postSchema = postSchema