const { Schema, model } = require("mongoose");
const Thought = require("./Thought");

const userSchema = new Schema(
    {
        username: {
            type: String,
            requred: true,
            unique: true,
            // add trimmed
        },
        email: {
            type: String,
            required: true,
            unique: true,
            // must match (use validation and look into Mongoose validation)
        },
        thoughts: [thoughtSchema],
        friends: [userSchema], // self-referenced using User model
    },
    {
        toJSON: {
            getters: true,
            virtuals: true,
        }
    }
);

// Creation of virtual property "friendCount" that retrieves the length of the user's friends array field on query
userSchema
    .virtual("friendCount")
    .get(function () {
        return this.friends.friendCount;
    });

const User = model("user", userSchema)

module.exports = User;