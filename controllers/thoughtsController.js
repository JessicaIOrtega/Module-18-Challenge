const { ObjectId } = require('mongoose').Types;
const { Thoughts } = require('../models');

module.exports = {
    // get all thoughts
    getThoughts(req, res) {
        Thoughts.find()
            .then((thoughts) => res.json(thoughts))
            .catch((error) => {
                console.log(error);
                res.status(500).json(error);
            });
    },

    // get single thoughts
    getSingleThoughts(req, res) {
        Thoughts.findById(req.params.id)
            .then((thoughts) => res.json(thoughts))
            .catch((error) => {
                console.log(error);
                res.status(500).json(error);
            });
    },
    // create thoughts
    createThoughts(req, res) {
        Thoughts.create(req.body)
            .then((thoughts) => res.json(thoughts))
            .catch((error) => {
                console.log(error);
                return res.status(500).json(error);
            });
    },

    deleteThoughts(req, res) {
        Thoughts.findByIdAndDelete(req.params.id)
            .then((thoughts) => res.json(thoughts))
            .catch((error) => {
                console.log(error);
                return res.status(500).json(error);
            });
    },

    addReaction(req, res) {
        Thoughts.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $push: { reactions: req.body } },
            { new: true, runValidators: true }
        )
            .then((thoughts) => {
                if (!thoughts) {
                    return res.status(404).json({ message: 'No thought found with this id!' });
                }
                res.json(thoughts);
            })
            .catch((error) => {
                console.log(error);
                return res.status(500).json(error);
            });
    },

    removeReaction(req, res) {
        Thoughts.findByIdAndDelete(req.params.id)
            .then((thoughts) => {
                if (!thoughts) {
                    return res.status(404).json({ message: 'No thought found with this id!' });
                }
                res.json({ message: 'Reaction deleted successfully' });
            })
            .catch((error) => {
                console.log(error);
                return res.status(500).json(error);
            });
    }
};