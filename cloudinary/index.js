const cloudinary = require('cloudinary').v2
const {CloudinaryStorage} = require('multer-storage-cloudinary');

cloudinary.config({
    cloud_name:process.env.Cloud_Name,
    api_key: process.env.Cloud_Key,
    api_secret:process.env.Cloud_Secret
})

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'Homely',
    allowedFormats:['png','jpeg','jpg'] // supports promises as well
  },
});

module.exports = {
    cloudinary,
    storage
}