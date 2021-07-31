const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const quizRoutes = require('./quiz-routes.js');


router.use('/users', userRoutes);
router.use('/quiz', quizRoutes);


module.exports = router;