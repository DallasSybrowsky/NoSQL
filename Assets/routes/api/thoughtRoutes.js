const router = require("express").Router();

const {
    getAllThoughts,
    getSingleThought,
    createThought,
    deleteThought,
    updateThought,
} = require("../../controllers/thoughtController");

// /api/thoughts/
router.route("/").get(getAllThoughts)

// /api/thoughts/:thoughtId
router.route("/:thoughtId")
    .get(getSingleThought)
    .post(createThought)
    .put(updateThought)
    .delete(deleteThought);

module.exports = router;