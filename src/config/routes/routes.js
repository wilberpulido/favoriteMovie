const express = require("express");
const router = express.Router();

const searchRouter = require('../../controllers/search');
const userRouter = require('../../controllers/auth');

router.use('/api/search',searchRouter);
router.use('/api/auth',userRouter);

module.exports = router;