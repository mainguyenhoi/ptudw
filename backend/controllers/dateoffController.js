const date_off = require('@models').off_request
const saveDateOff = {
    saveData: async (data) => {
        try {
            const dateOffi = await date_off.create({
                userId: data.UserId,
                startDate: data.DayOff_Start,
                endDate: data.DayOff_Start + data.DayOff_Num,
                reason: "",
                unitManagerResponse: data.UnitManager_Opinion,
                unitManagerUpdateAt: data.UnitManager_Opinion_Day,
                branchManagerResponse: data.BranchManager_Opinion,
                branchManagerUpdateAt: data.BranchManager_opinion_Day,
                status: data.status,
            });
            if (dateOffi instanceof date_off) {
                console.log("Insert data to dateoff: ");
                console.log(JSON.stringify(dateOffi, null, 4));
            }
        } catch (error) {
            console.log(error);
            return false;
        }
    },
    reponseDateOffLs: async () => {
        const dateOff = await date_off.finAll();
        return JSON.parse(JSON.stringify(dateOff));
    }


}
module.exports = saveDateOff;