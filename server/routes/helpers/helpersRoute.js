const express=require('express')
const router=express.Router()
const {getPhotos,getPhoto,updatePhoto,getPhotosFiltered,createPhoto,deletePhoto}=require('../../controllers/helpers/helpersController')

router.route('/').get(getPhotos)
router.route('/:id').get(getPhoto)
router.route('/:id').put(updatePhoto)
router.route('/categ/:id').get(getPhotosFiltered)
router.route('/').post(createPhoto)
router.route('/:id/:imageId').delete(deletePhoto)


module.exports=router