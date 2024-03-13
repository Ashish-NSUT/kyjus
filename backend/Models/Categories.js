const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
    tag: {
        type:String
    },
    description:{
        type:String,
        required:true,
    },
    course:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:"Course"
        }
    ]
});

module.exports = mongoose.model('Category', CategorySchema);