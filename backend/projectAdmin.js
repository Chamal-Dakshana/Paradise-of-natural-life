const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectAdminSchema = new Schema({
    pname: {type: String, required: true},
    category: {type: String, required: true},
    details: {type: String, required: true},
    purpose: {type: String, required: true},
    duration: {type: Number, required: true},
    projectImage: { type: String, required: true },
    result: { type: String, required: true },
    postDate: {type: Date, default:Date.now}
});

const projects = mongoose.model("projects", projectAdminSchema);

module.exports = projects;