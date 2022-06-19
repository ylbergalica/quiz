var express = require("express");
const router = express.Router();
const cntIndex=require("../../controllers/cntIndex")

router.get('/',function(req,res){
    cntIndex.index(req,res)
})

module.exports=router