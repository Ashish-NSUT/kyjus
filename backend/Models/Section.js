const mongoose = require('mongoose');

const SectionSchema = new mongoose.Schema({
    name:{
        type: String
    },
    subsection:[
        {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref:"Subsection"
        }
    ]
});

module.exports = mongoose.model("Section", SectionSchema);