const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const gpuSchema = new Schema({
  gpuType: {
    type: String,
    required: true
    //Desktop GPU
    //Mobile GPU
    //Workstation GPU
    //Mobile Workstation GPU
    //Grid GPU
    //Console GPU
  },
  manufacturer: {
    type: String,
    required: true
  },
  modelName: {
    //The marketing name for the processor, assigned by manufacturer.
    type: String,
    required: true
  },
  codeName: {
    /* The internal engineering codename for the processor(typically
        designated by an NVXY name and later GXY where X is the 
        series number and Y is the schedule of the project for that
        generation). */
    type: String,
    required: false
  },
  fabricationProcess: {
    /*  Fabrication process. Average feature size of components of the processor. */
    type: Number,
    required: true
  }
});

module.exports = mongoose.model("GPU", gpuSchema);
