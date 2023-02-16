const mongoose = require('mongoose');

const todoListSchema = new mongoose.Schema({
    Text: {
        type: String,
        require: true
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
}, { timestamps: true })

module.exports = mongoose.model("To-Do-List", todoListSchema);
