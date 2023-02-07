const router = require("express").Router();

const {
    getAllthoughts,
    getSinglethought,
    createthought,
    deletethought,
    updatethought,
} = require("../../controllers/thoughtController");

// /api/thoughts/
router.route("/").get(getAllthoughts)

// /api/thoughts/:thoughtId
router.route("/:thoughtId")
    .get(getSinglethought)
    .post(createthought)
    .put(updatethought)
    .delete(deletethought);

module.exports = router;