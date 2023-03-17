const { Schema, model } = require('mongoose');
const thoughtsSchema = require('./Thoughts');

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
        thoughts: [{
            type: Schema.Types.ObjectId,
            ref: 'Thoughts',
        },],
        friends: [{
            type: Schema.Types.ObjectId,
            ref: 'User',
        },],
    },
    {
        toJSON: {
            virtuals: true,
            getters: true,
        },
        id: false,
    }
);

// Add virtual property for friendCount
userSchema.virtual('friendCount').get(function () {
    return this.friends.length;
});

const User = model('User', userSchema);

module.exports = User;