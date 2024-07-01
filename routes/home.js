const express = require('express');
const router = express.Router();
const wrapAsync = require('../utilities/wrapAsync');
const {isLoggedIn} = require('../middleware');
const {isOwner} = require('../middleware');
const{validateHome} = require('../middleware');
const {storage} = require('../cloudinary/index')
const multer = require('multer');
const upload = multer({storage})
const {index,getNewHome,createNewHome,showHome,editHome,updateHome,deleteHome} = require('../controller/home')


router.route('/')
    .get(wrapAsync(index))
    .post(isLoggedIn,upload.array('image'),validateHome,wrapAsync(createNewHome));

router.get('/new',isLoggedIn,wrapAsync(getNewHome));

router.route('/:id')
    .get(wrapAsync(showHome))
    .put(isLoggedIn,isOwner,upload.array('image'),validateHome,wrapAsync(updateHome))
    .delete(isLoggedIn,isOwner,wrapAsync(deleteHome));

router.get('/:id/edit',isLoggedIn,isOwner,wrapAsync(editHome));

module.exports = router;


