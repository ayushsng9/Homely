const Home = require('../models/home');
const Review = require('../models/review');

module.exports.createNewReview = async(req,res)=>{
    const {id} = req.params;
    const home = await Home.findById(id);
    const review = new Review(req.body.review);
    review.author = req.user._id;
    home.reviews.push(review);
    await review.save();
    await home.save();
    req.flash('success','Successfully added a review');
    res.redirect(`/homes/${home._id}`);
}

module.exports.deleteReview = async(req,res)=>{
    const {id,reviewId} = req.params;
    await Home.findByIdAndUpdate(id,{$pull:{reviews:reviewId}});
    await Review.findByIdAndDelete(reviewId);
    req.flash('success','Successfully deleted review');
    res.redirect(`/homes/${id}`);
}