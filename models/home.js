const mongoose = require('mongoose');
const Review = require('./review');

const imageSchema = new mongoose.Schema({
  url:String,
  filename:String
});

imageSchema.virtual('thumbnail').get(function(){
  return this.url.replace("/upload", "/upload/ar_5:3,c_crop");
})

const opts = {toJSON:{virtuals:true}};

const homeSchema = new mongoose.Schema({
    title: String,
    images:[imageSchema],
    price:Number,
    geometry:{
      type:{
        type:String,
        enum:['Point'],
        required:true
      },
      coordinates:{
        type:[Number],
        required:true
      }
    },
    location:String,
    description:String,
    owner: {
      type:mongoose.Schema.Types.ObjectId,
      ref:'User'
    },
    reviews:[
      {
        type:mongoose.Schema.Types.ObjectId,
        ref:'Review'
      }
    ]

  },opts);

homeSchema.virtual('properties.popUpText').get(function(){
  return `<a href="/homes/${this._id}"> <h6>${this.title}</h6>${this.location} </a>`;
})

homeSchema.post('findOneAndDelete',async(foundHome)=>{
  if(foundHome.reviews.length)
    {
        await Review.deleteMany({
          _id:{
            $in:foundHome.reviews
          }
        })
    }

})

module.exports = mongoose.model('Home', homeSchema);