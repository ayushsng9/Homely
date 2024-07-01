const Home = require('./models/home');
const Review = require('./models/review');
const appError = require('./utilities/appError');
const wrapAsync = require('./utilities/wrapAsync');
const {homeSchema} = require('./validation');
const {reviewSchema} = require('./validation');

module.exports.validateHome = ((req,res,next)=>{
    const {error} = homeSchema.validate(req.body);
    if(error)
        {   const message = error.details.map(el=>el.message).join(',');
            throw new appError(400,message);
        }
    else
    {
        next();
    }
})

module.exports.validateReview = ((req,res,next)=>{
    const {error} = reviewSchema.validate(req.body);
    if(error)
        {   const message = error.details.map(el=>el.message).join(',');
            throw new appError(400,message);
        }
    else
    {
        next();
    }
})


module.exports.isLoggedIn = (req,res,next)=>{
    if(!req.isAuthenticated())
        {
            req.flash('error','You must be logged in');
            return res.redirect('/login');
        }

    next();
}

module.exports.isOwner = wrapAsync(async(req,res,next)=>{
    const {id} = req.params;
    const foundHome = await Home.findById(id);
    if(!foundHome.owner.equals(req.user._id)){
        req.flash('error','You are not allowed to do that!');
        return res.redirect(`/homes/${id}`);
    }

    next();
})

module.exports.isAuthor = wrapAsync(async(req,res,next)=>{
    const {reviewId} = req.params;
    const foundReview = await Review.findById(reviewId);
    if(!foundReview.author.equals(req.user._id)){
        req.flash('error','You are not allowed to do that!');
        return res.redirect(`/homes/${id}`);
    }

    next();
})