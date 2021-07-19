const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    passwordHash: {
        type: String,
        required: true,
    },
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    userIMG: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now,
    },

})

userSchema.virtual('id').get(function () {
    return this._id.toHexString();
})

userSchema.set('toJSON', {
    virtuals: true,
})

exports.User = mongoose.model('User', userSchema);
exports.userSchema = userSchema