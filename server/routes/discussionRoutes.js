const router =
  require("express").Router();

const {
  createDiscussion,
  getDiscussions,
} = require("../controllers/discussionController");

router.post("/", createDiscussion);

router.get("/", getDiscussions);

module.exports = router;