const WorkForm = require('@models').mission_form_fix
const saveDateWF = {
    saveData: async (data) => {
        try {
            console.log("data");
            console.log(data);
            const save = await WorkForm.create({
                // unitId: data.unit,
                // startDate: data.dayStart,
                // endDate: data.dayEnd,
                // note: "Nhân viên tham gia: " + data.userId1 + " : " + data.name1 + " | " + data.userId2 + " : " + data.name2 + " | " + data.userId3 + " : " + data.name3 + " | " + data.userId4 + " : " + data.name4,
                // address: data.location,
                unitId: 1,
                startDate: "11/11/2012",
                endDate: "11/11/2012",
                note: "di cong tac",
                address: "KienGiang"
            });
            //const save = await WorkForm.findOrCreate({where: {unitId: '1'}, defaults: {note: 'Technical Lead JavaScript',startDate: '1/1/2012', endDate: '1/1/2012', address:'kiengiang' }})
            console.log(save);
            if (save) {
                console.log("Insert data to mission_form: ");
                console.log(JSON.stringify(save, null, 4));
            }

        } catch (error) {
            console.log("Insert data failed");
            console.log(error);
        }
    }
}
module.exports = saveDateWF;