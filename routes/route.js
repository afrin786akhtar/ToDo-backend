const express = require('express');
const router = express.Router();
const { createToDo, fetchData, updateList, deleteList} = require('../Controller/ToDoListController');

router.post('/add-task' , createToDo);
router.get('/getData', fetchData);
router.put('/updateData/id', updateList);
router.delete('/deleteData', deleteList);

module.exports = router