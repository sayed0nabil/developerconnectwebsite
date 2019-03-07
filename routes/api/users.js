
const express = require('express'),
      router = express.Router();
// Relative Path /api/users
router.get('/', (req, res) => res.json({msg: 'Users Works'}));

module.exports = router;