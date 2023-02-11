const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/date-format')
const reactionSchema = require('./Reaction');

// Schema to create Student model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: 'You must leave a thought!',
      max_length: 280,
      min_lenght: 1
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: timestamp => dateFormat(timestamp)
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      getters: true,
    },
    id: false
  }
);
thoughtSchema.virtual('reactionCount').get(function() {
  return this.reactions.length;
});
const Thought = model('Thought', thoughtSchema);
module.exports = Thought;
