const express = require('express')
const router = express.Router();

// @route   GET api/posts/test
// @desc    Test post route
// @access  Public route
router.get('/test',(req,res) => res.json({msg: "Post's work"}))

module.exports = router;