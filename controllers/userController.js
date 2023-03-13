// const { ObjectId } = require('mongoose').Types;
const { User } = require('../models');

module.exports = {
    // Get all User
    getUsers(req, res) {
        User.find()
            .then((user) => res.json(user))
            .catch((err) => {
                console.log(err);
                return res.status(500).json(err);
            });
    },
    getSingleUser(req, res) {
        User.findById(req.params.id)
            .then((user) => res.json(user))
            .catch((err) => {
                console.log(err);
                return res.status(500).json(err);
            });
    },

    createUser(req, res) {
        User.create(req.body)
            .then((user) => res.json(user))
            .catch((err) => res.status(500).json(err));
    },

    deleteUser(req, res) {
        User.findByIdAndDelete(req.params.id)
            .then((user) => res.json(user))
            .catch((err) => res.status(500).json(err));
    },

    addFriend(req, res) {
        const { friendId } = req.body;
        User.findByIdAndUpdate(
            req.params.userId,
            { $addToSet: { friends: friendId } },
            { new: true }
        )
            .populate('friends')
            .then((user) => res.json(user))
            .catch((err) => res.status(500).json(err));
    },

    removeFriend(req, res) {
        const { friendId } = req.body;
        User.findByIdAndUpdate(
            req.params.userId,
            { $pull: { friends: friendId } },
            { new: true }
        )
            .populate('friends')
            .then((user) => res.json(user))
            .catch((err) => res.status(500).json(err));
    }
};
