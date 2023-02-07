const { Schema, model } = require("mongoose");


// Schema to create Thought model
const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minLength: 1,
            maxLength: 280,
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
        username: {
            type: String,
            required: true,
        },
        reactions: [reactionSchema]
    },
    {
        toJSON: {
            getters: true,
            virtuals: true,
        }
    }
);

// Creation of virtual property "reactionCount" that retrieves the length of the thought's reactions array field on query
thoughtSchema
    .virtual("reactionCount")
    .get(function () {
        return this.reactions.reactionCount;
    });

// Initialization of Thought model
const Thought = model("thought", thoughtSchema);

module.exports = Thought;