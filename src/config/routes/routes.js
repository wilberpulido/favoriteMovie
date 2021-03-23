const express = require("express");
const router = express.Router();

const searchRouter = require('../../controllers/search.controller');
const authRouter = require('../../controllers/auth.controller');

router.use('/api/search',searchRouter);
router.use('/api/auth',authRouter);

module.exports = router;