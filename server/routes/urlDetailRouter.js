const express=require('express');
const { addNewUrlData, retriveUrlDataByUserId, removeNewUrlData, updateNewUrlData } = require('../controllers/urlDetailController');
const { authenticateToken } = require('../middleware/authentication');
const urlRouter=express.Router();


urlRouter.get("/", authenticateToken,retriveUrlDataByUserId)

urlRouter.post("/",authenticateToken,addNewUrlData);

urlRouter.put("/:id",authenticateToken,updateNewUrlData)

urlRouter.delete("/:id",authenticateToken,removeNewUrlData);

module.exports=urlRouter
