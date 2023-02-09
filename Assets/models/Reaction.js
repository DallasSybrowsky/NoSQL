const { Schema, model } = require("mongoose");

// Schema to create Reaction model
const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: new ObjectId,
        },
        reactionBody: {
            type: String,
            required: true,
            minLength: 1,
            maxLength: 280,
        },
        username: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (createdAtVal) => moment(createdAtVal).format("MMM DD, YYYY [at] hh:mm a"),

        },
    },
);
// Initialization and export of Reaction model
const Reaction = model("Reaction", reactionSchema)

module.exports = Reaction;

// Reaction Schema from GUIDELINES
// * `reactionId`
    // * Use Mongoose's ObjectId data type
    // * Default value is set to a new ObjectId

// * `reactionBody`
    // * String
    // * Required
    // * 280 character maximum

// * `username`
    // * String
    // * Required

// * `createdAt`
    // * Date
    // * Set default value to the current timestamp
    // * Use a getter method to format the timestamp on query
