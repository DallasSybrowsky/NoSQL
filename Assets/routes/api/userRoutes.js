const router = require("express").Router();
const {
    getAllUsers,
    getSingleUser,
    createUser,
    deleteUser,
    updateUser,
} = require("../../controllers/userController");

// /api/users/
router.route("/").get(getAllUsers)

// /api/users/:userId
router.route("/:userId")
    .get(getSingleUser)
    .post(createUser)
    .put(updateUser)
    .delete(deleteUser);

module.exports = router;