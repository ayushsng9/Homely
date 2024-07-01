const express = require('express');
const router = express.Router({mergeParams:true});
const wrapAsync = require('../utilities/wrapAsync');
const {isLoggedIn,validateReview,isAuthor} = require('../middleware');
const { createNewReview , deleteReview} = require('../controller/reviews');

router.post('/',isLoggedIn,validateReview,wrapAsync(createNewReview))

router.delete('/:reviewId',isLoggedIn,isAuthor,wrapAsync(deleteReview))

module.exports = router;
