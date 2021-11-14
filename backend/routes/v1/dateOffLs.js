const express = require('express');
const dateoffController = require('../../controllers/dateoffController');
const router = express.Router();
router.post('/', async(req, res, next) => {
    try{
        const data = await dateoffController.reponseDateOffLs();
        res.json(data);
    } catch (error){
        console.log(error);
    }    
});
module.exports = router;