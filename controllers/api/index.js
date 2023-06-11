const router = require('express').Router();
const userRoutes = require('./userRoutes');
//const commentRoutes= require('./commentRoutes');

router.use('/users', userRoutes);
//router.use('/post', commentRoutes);

module.exports = router;
