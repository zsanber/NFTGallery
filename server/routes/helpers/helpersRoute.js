const express=require('express')
const router=express.Router()
const {getPhotos,getPhoto,updatePhoto,getPhotosFiltered,createPhoto,deletePhoto,getUsersByAdmin, deleteUserByAdmin}=require('../../controllers/helpers/helpersController')

router.route('/admin').get(getUsersByAdmin)
router.route('/:userId').get(getPhotos)
router.route('/photo/:id').get(getPhoto)
router.route('/:id').put(updatePhoto)
router.route('/:userId/categ/:id').get(getPhotosFiltered)
router.route('/admin/:id').delete(deleteUserByAdmin)
router.route('/').post(createPhoto)
router.route('/:id/:imageId').delete(deletePhoto)



module.exports=router