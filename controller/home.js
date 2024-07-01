const Home = require('../models/home');
const {storage, cloudinary} = require('../cloudinary/index');
const mbxGeocoding = require("@mapbox/mapbox-sdk/services/geocoding");
const mapboxToken = process.env.Mapbox_Token;
const geocoder = mbxGeocoding({accessToken:mapboxToken});


module.exports.index = async(req,res) => {
    if(req.query.search_query)
        {
            const homes = await Home.find({ 'title': { $regex: '^' + req.query.search_query, $options: 'i' } }).exec();
            res.render('homes/index',{homes});
        }
    else
    {
    const homes = await Home.find({});
    res.render('homes/index',{homes});
    }
    
}

module.exports.getNewHome = async(req,res)=>{
    if(!req.isAuthenticated())
        {
            req.flash('error','You must be signed in');
            res.redirect('/login');
        }
    res.render('homes/new');
}

module.exports.createNewHome = async(req,res)=>{
    const result = await geocoder.forwardGeocode({
        query:req.body.home.location,
        limit:1
    }).send();
    const newHome = new Home(req.body.home);
    newHome.geometry = result.body.features[0].geometry;
    newHome.images = req.files.map(f => ({ url: f.path, filename: f.filename }));
    newHome.owner = req.user._id;
    await newHome.save();
    console.log(newHome);
    req.flash('success','Succesfully made a Home');
    res.redirect(`/homes/${newHome._id}`);
}

module.exports.showHome = async(req,res)=>{
    const {id} = req.params;
    const foundHome = await Home.findById(id).populate({path:'reviews',populate:{path:'author'}}).populate('owner');
    if(!foundHome)
        {
            req.flash('error','Home not found!');
            res.redirect('/homes');
        }
    else
    {
        res.render('homes/show',{foundHome});
    }
}

module.exports.editHome = async(req,res)=>{
    const {id} = req.params;
    const foundHome = await Home.findById(id);
    if(!foundHome)
        {
            req.flash('error','Home not found!');
            res.redirect('/homes');
        }
    else
    {
        res.render('homes/edit',{foundHome});
    }
    
}

module.exports.updateHome = async (req, res) => {
    const { id } = req.params;
    const home = await Home.findByIdAndUpdate(id, { ...req.body.home});
    const imgs = req.files.map(f => ({ url: f.path, filename: f.filename }));
    home.images.push(...imgs);
    await home.save();
    if(req.body.deleteImages)
        {   for(let file of req.body.deleteImages)
             {
                await cloudinary.uploader.destroy(file);
             }
            await Home.updateOne({$pull:{images:{$in:req.body.deleteImages}}})
        }
    req.flash('success', 'Successfully updated home!');
    res.redirect(`/homes/${home._id}`)
}

module.exports.deleteHome = async (req, res) => {
    const { id } = req.params;
    await Home.findByIdAndDelete(id);
    req.flash('success', 'Successfully deleted Home')
    res.redirect('/homes');
}

