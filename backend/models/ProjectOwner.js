const mongoose = require ("mongoose");

const Schema = mongoose.Schema;

const projectOwnerShema = new Schema({

    proName : {
        type : String,
        required : true
    },

    proCategory : {
        type : String,
        required :true
    },

    proPurpose : {
        type : String,
        required :true
    },

    proDuration : {
        type : String,
        required :true
    },
    
    proResult : {
        type : String,
        required :true
    },

    proResultDuration : {   
        type : String,
        required :true
        
    }

});

const ProjectOwner = mongoose.model("ProjectOwner",projectOwnerShema);

module.exports = ProjectOwner;