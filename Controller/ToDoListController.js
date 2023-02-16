const ToDoListModel = require("../Model/ToDoListModel");

//---------------Adding data in List--------------------

const createToDo = async function (req, res) {
    try {
        let text = req.body;
        let saveData = await ToDoListModel.create(text);
        return res.send({ msg: "Data added successfully to the List.", data: saveData });

    } catch (error) {
        return res.status(500).send({ status: false, msg: error.msg })
    }
}

//---------------fetching the data from list--------------
const fetchData = async function (req, res) {
    try {
        const data = await ToDoListModel.find();
        return res.send({ msg: "Data", data: data });

    } catch (error) {
        return res.status(500).send({ status: false, msg: error.msg })
    }
}

//--------------updating the list --------------------
const updateList = async function (req, res) {
    try {
        let text = req.body;
        let id = req.params.id;

        console.log(text)
        // let dataPresent = await ToDoListModel.findByIdAndUpdate({_id : id});
        // if (!dataPresent) return res.send({ msg: "No Data Found" });

        let updateData = await ToDoListModel.findOneAndUpdate({_id : id} , { $set: { text } }, { new: true });
        console.log(updateData);
        return res.send({ msg: "Data updated Succesfully.", data: updateData });

    } catch (error) {
        return res.status(500).send({ status: false, msg: error.msg })
    }
}

//---------------deleting to-do List-------------------
const deleteList = async function(req , res){
    try {
        const {_id } = req.body;
        let data = ToDoListModel.findByIdAndDelete(_id)
        return res.send({msg : "List Deleted Successfully" })
    } catch (error) {
        return res.status(500).send({ status: false, msg: error.msg })
    }
}

module.exports = { createToDo, fetchData, updateList, deleteList}