if(process.env.NODE_ENV !== "production"){
    require('dotenv').config();
}



const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const methodOvveride = require('method-override');
const ejsMate = require('ejs-mate');
const appError = require('./utilities/appError');
const homeRoutes = require('./routes/home');
const reviewRoutes = require('./routes/reviews');
const session = require('express-session');
const flash = require('connect-flash');
const User = require('./models/user');
const userRoutes = require('./routes/user');
const passport = require('passport');
const localStrategy = require('passport-local');
const favicon = require('express-favicon');
const MongoStore = require('connect-mongo');
const helmet = require('helmet');

app.engine('ejs',ejsMate);
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.static(path.join(__dirname,'public')));
app.use(favicon(__dirname + '/public/images/favicon.ico'));
app.use(flash());


const dbURL = process.env.DB_URL


main().catch(err => console.log(err));

//'mongodb://127.0.0.1:27017/homely'

async function main() {
  await mongoose.connect(dbURL)
}


const store = MongoStore.create({
    mongoUrl: dbURL,
    touchAfter: 24 * 60 * 60,
    crypto: {
        secret: 'topSecret'
    }
});


store.on('error',(e)=>{
    console.log("Session Store Error",e);
})


app.use(session({store,secret:'topSecret',resave:false,saveUninitialized:false,
    cookie:{
        name:'session',
        httpOnly:true,
        maxAge: 1000*60*60*24*7}}))


app.use(helmet());


        const scriptSrcUrls = [
            "https://api.tiles.mapbox.com/",
            "https://api.mapbox.com/",
            "https://cdn.jsdelivr.net",
        ];
        const styleSrcUrls = [
            "https://api.mapbox.com/",
            "https://api.tiles.mapbox.com/",
            "https://fonts.googleapis.com",
            "https://cdn.jsdelivr.net",
            "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/",
        ];
        const connectSrcUrls = [
            "https://api.mapbox.com/",
            "https://a.tiles.mapbox.com/",
            "https://b.tiles.mapbox.com/",
            "https://events.mapbox.com/",
        ];
        const fontSrcUrls = [
            "https://fonts.googleapis.com",
            "https://fonts.gstatic.com",
            "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/",
        ];
        app.use(
            helmet.contentSecurityPolicy({
                directives: {
                    defaultSrc: [],
                    connectSrc: ["'self'", ...connectSrcUrls],
                    scriptSrc: ["'unsafe-inline'", "'self'", ...scriptSrcUrls],
                    styleSrc: ["'self'", "'unsafe-inline'", ...styleSrcUrls],
                    workerSrc: ["'self'", "blob:"],
                    objectSrc: [],
                    imgSrc: [
                        "'self'",
                        "blob:",
                        "data:",
                        "https://res.cloudinary.com/dtgkh6fc9/",
                        "https://images.unsplash.com/",
                    ],
                    fontSrc: ["'self'", ...fontSrcUrls],
                },
            })
        );

app.use(passport.initialize());
app.use(passport.session());

passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());



app.use(express.urlencoded({extended:true}));
app.use(methodOvveride('_method'));



app.use((req,res,next)=>{
    res.locals.currentUser = req.user;
    res.locals.success = req.flash('success');
    res.locals.error = req.flash('error');
    next();
})



// user routes

app.use('/',userRoutes);


// home routes

app.use('/homes',homeRoutes);

app.get('/',(req,res)=>{
    res.render('home');
})


// review routes

app.use('/homes/:id/reviews',reviewRoutes);


app.all('*',(req,res,next)=>{
    next(new appError(400,'Page Not Found'));
})


app.use((err,req,res,next)=>{
    const {status=500} = err;
    if(!err.message)
        {
            err.message = 'Something went Wrong!'
        }
    res.status(status).render('error',{err});
})



// listen

app.listen(3000,()=>{
    console.log('On port 3000');
})