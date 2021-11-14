const express =  require('express');
//const { default: saveData } = require('../../controllers/workFormController');
const router = express.Router();
const saveDateWF = require('../../controllers/workFormController');
router.get('/',(req, res)=>{
    // console.log("okok");
    // res.send("Server Active");
    res.json('okokokok');
    res.send();
})
router.post('/', async(req, res) =>{
    console.log("POST_WORK_FORM");
    //console.log(req.body);
    if(!req.body.name1){
        req.body.name1 = "";
    }
    if(!req.body.userId1){
        req.body.userId1 = "";
    }
    if(!req.body.name2){
        req.body.name2 = "";
    }
    if(!req.body.userId2){
        req.body.userId2 = "";
    }
    if(!req.body.name3){
        req.body.name3 = "";
    }
    if(!req.body.userId3){
        req.body.userId3 = "";
    }
    if(!req.body.name4){
        req.body.name4 = "";
    }
    if(!req.body.userId4){
        req.body.userId4 = "";
    }  
    
    try {
        //console.log(req.body);
        const save = await saveDateWF.saveData(req.body);
        if(save == false){
            res.json('Failed');
        }
        console.log(save);
        res.json('Success');
    } catch (error) {
        console.log(error);
    }
    
})

module.exports = router;