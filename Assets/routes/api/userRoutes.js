const router = require("express").Router();
const {
    getAllUsers,
    getSingleUser,
    createUser,
    deleteUser,
    updateUser,
    getFriend,
    deleteFriend,
} = require("../../controllers/userController");

// /api/users/
router.route("/").get(getAllUsers)

// /api/users/:userId
router.route("/:userId")
    .get(getSingleUser)
    .post(createUser)
    .put(updateUser)
    .delete(deleteUser);

// /api/users/:userId/friends/:friendId
router.route("friends/:userId")
    .post(getFriend)
    .delete(deleteFriend);

    module.exports = router;