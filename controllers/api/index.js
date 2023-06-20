// Defining the API routes and exporting them for use in the application

const router = require('express').Router();
const userRoutes = require('./userRoutes');
const postRoutes = require('./postRoutes');

router.use('/users', userRoutes);
router.use('/post', postRoutes);


module.exports = router;
