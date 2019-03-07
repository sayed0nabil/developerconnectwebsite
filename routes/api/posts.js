const express = require('express'),
      router  = express.Router();
// Relative Path /api/posts
router.get('/', (req, res) => res.json({msg: "Posts Works"}));

module.exports = router;