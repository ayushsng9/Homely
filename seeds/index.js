const mongoose = require('mongoose');
const Home = require('../models/home');
const cities = require('./cities');
const {places,descriptors} = require('./seedHelpers');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/homely')
}

const randName = (array) => (array[Math.floor(Math.random()*array.length)]);

const seedDB = async()=>{
    await Home.deleteMany({});
    for(let i = 0; i < 150;i++)
        {
            const random162= Math.floor(Math.random() * 162);
            const price = Math.floor(Math.random()*40000) + 1000;
            const newHome = new Home({
                location: `${cities[random162].city},${cities[random162].capital}`,
                title: `${randName(descriptors)} ${randName(places)}`,
                images:[
                    {   url:"https://res.cloudinary.com/dtgkh6fc9/image/upload/ar_5:3,c_crop/v1718216441/PXL_20230930_024126552_fgrkk8.jpg",
                        filename:"PXL_20230930_024126552_fgrkk8.jpg"
                    }
                ],

                description: 'Welcome to the Hotel',
                price: `${price}`,
                geometry:{
                    type:"Point",
                    coordinates:[
                        cities[random162].lng,
                        cities[random162].lat
                    ]
                },
                owner: '6672a8c8d34c53decb5b0548'
            })

        await newHome.save();
        }
}

seedDB().then(()=>{
    mongoose.connection.close();
})
