const { User, Thought } = require("../models");

module.exports = {
  // Get all thoughts
  getThoughts(req, res) {
    Thought.find({})
      .then((thoughts) => res.json(thoughts))
      .catch((err) => res.status(500).json(err));
  },

  // Get a single thought
  getSingleThought(req, res) {
    Thought.findOne({ _id: req.params.thoughtId })
      .then((thought) => {
        !thought
          ? res.status(404).json({ message: "No thought with that ID found." })
          : res.json(thought);
      })
      .catch((err) => {
        res.status(500).json(err);
      });
  },

  // Create a new thought
  createThought(req, res) {
    Thought.create(req.body)
      .then(({ _id }) => {
        return User.findOneAndUpdate(
          { _id: req.body.userId },
          { $push: { thoughts: _id } },
          { new: true }
        );
      })
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: "No user with that ID found." })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },

  // Update a thought
  updateThought(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((user) =>
        !user
          ? res.status(404).json({ message: "No thought with that ID found." })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },

  // Delete a thought
  deleteThought(req, res) {
    Thought.findOneAndDelete({ _id: req.params.thoughtId })
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: "No thought with that ID found." })
          : User.findOneAndUpdate(
              { thoughts: req.params.thoughtId },
              { $pull: { thoughts: req.params.thoughtId } },
              { new: true }
            )
      )
      .then((user) =>
        !user
          ? res.status(404).json({
              message:
                "That thought has been deleted, but no associated user found.",
            })
          : res.json({ message: "Thought deleted successfully!" })
      )
      .catch((err) => res.status(500).json(err));
  },

  // Add a reaction
  addReaction(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $pull: { reactions: { reactionID: req.params.reactionId } } },
      { runValidators: true, new: true }
    )
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: "No thought found with that ID." })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },

  // Delete a reaction
  deleteReaction(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $pull: { reactions: { reactionID: req.params.reactionId } } },
      { runValidators: true, new: true }
    )
      .then((thought) => {
        !thought
          ? res.status(404).json({ message: "No thought with that ID found." })
          : res.json(thought);
      })
      .catch((err) => res.status(500).json(err));
  },
};
