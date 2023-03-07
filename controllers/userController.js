const { ObjectId } = require('mongoose').Types;
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

    createUser(req, res) {
        User.create(req.body)
            .then((user) => res.json(user))
            .catch((err) => res.status(500).json(err));
    }
}