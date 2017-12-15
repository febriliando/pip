// 
// // Imports the Google Cloud client library.
// const Storage = require('@google-cloud/storage');
// 
// // Instantiates a client. If you don't specify credentials when constructing
// // the client, the client library will look for credentials in the
// // environment.
// const storage = Storage();

require('dotenv').config()

const Storage = require('@google-cloud/storage')

const CLOUD_BUCKET = 'emberhacktiv8'

const storage = Storage({
  projectId: 'hacktiv8-image-recog',
  keyFilename: process.env.KEYFILE_PATH
})
const bucket = storage.bucket(CLOUD_BUCKET)

const getPublicUrl = (filename) => {
  return `https://storage.googleapis.com/${CLOUD_BUCKET}/${filename}`
}

const sendUploadToGCS = (req, res, next) => {
  if (!req.file) {
    return next()
  }
 
 const gcsname = Date.now() + req.file.originalname
   const file = bucket.file(gcsname)

   const stream = file.createWriteStream({
     metadata: {
       contentType: req.file.mimetype
     }
   })

   stream.on('error', (err) => {
     req.file.cloudStorageError = err
     next(err)
   })

   stream.on('finish', () => {
     req.file.cloudStorageObject = gcsname
     file.makePublic().then(() => {
       req.file.cloudStoragePublicUrl = getPublicUrl(gcsname)
       next()
     })
   })

   stream.end(req.file.buffer)
 }

 // const Multer = require('multer'),
 //       multer = Multer({
 //         storage: Multer.MemoryStorage,
 //         limits: {
 //           fileSize: 5 * 1024 * 1024
 //         }
 //         // dest: '../images'
 //     })

module.exports = {
getPublicUrl,
sendUploadToGCS,
// multer
}