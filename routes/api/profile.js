
const express = require('express'),
      router  = express.Router();
// Relative Path /api/profile
router.get('/', (req, res) => res.json({msg: "Profile Works"}));

module.exports = router;