const router = require('express').Router();
const {
    getThoughts,
    getSingleThoughts,
    createThoughts,
    deleteThoughts,
    addReaction,
    removeReaction,
} = require('../../controllers/thoughtsController');

// /api/thoughts
router.route('/').get(getThoughts).post(createThoughts);

// /api/thoughts/:thoughtsId
router.route('/:thoughtsId').get(getSingleThoughts).delete(deleteThoughts);

// /api/thoughts/:thoughtsId/reactions
router.route('/:thoughtsId/reactions').post(addReaction);

// /api/Thoughts/:thoughtsId/reactions/:assignmentId
router.route('/:thoughtsId/reactions/:reactionId').delete(removeReaction);

module.exports = router;