const Discussion = require("../models/Discussion");

exports.createDiscussion =
  async (req, res) => {
    const discussion =
      await Discussion.create(req.body);

    res.json(discussion);
  };

exports.getDiscussions =
  async (req, res) => {
    const discussions =
      await Discussion.find();

    res.json(discussions);
  };