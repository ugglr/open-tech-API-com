const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const gpuSchema = new Schema({});

module.exports = mongoose.model("GPU", gpuSchema);
