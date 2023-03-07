const { Schema, model } = require('mongoose');
// const thoughtsSchema = require('./Thoughts');
// const friendsSchema = require('./Friends');

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            match: [/.+@.+\..+/, 'Must match an email address!']
        },
        // thoughts: [thoughtsSchema],
        // friends: [friendsSchema]
    }
)

const User = model('user', userSchema);

module.exports = User;