const express=require('express');
const router=express.Router();
/*
const passport=require('passport');*/
const homeController=require('../controllers/home_controller');
router.get('/',homeController.home);
router.post('/create-app',homeController.create);
router.get('/delete-app',homeController.delete);
module.exports=router;
