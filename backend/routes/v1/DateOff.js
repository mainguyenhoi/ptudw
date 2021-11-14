const express = require('express');
const router = express.Router();
const saveDateOff = require('../../controllers/dateoffController');
router.get('/', (req, res) => {
    res.json('okokokok');
    res.send();
})
router.post('/', async(req, res, next) => {
    console.log("req.body.data");
    //console.log(req.body);
    const data = {
        UserId: req.user.id,
        DayOff_Start: req.body.dayOff,
        DayOff_Num: req.body.numDayOff,
        UnitManager_Opinion: req.body.opinionOfUnitManagement,
        UnitManager_Opinion_Day: req.body.dayOpinionOfUnitManagement,
        BranchManager_Opinion: req.body.opinionOfBranchManager,
        BranchManager_Opinion_Day: req.body.dayOpinionOfBranchManager,
        status: "not approved yet"
    }
    try {
        const save= await saveDateOff.saveData(data);
    } catch (error) {
        console.log(error);
    }
    res.json('Success');
    res.send();
});
module.exports = router;