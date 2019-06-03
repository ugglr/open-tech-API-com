const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const gpuSchema = new Schema({
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
  launchDate: {
    type: Date,
    required: true
  },
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
  fabricationProcess: {
    /*  Fabrication process. Average feature size of components of the processor. */
    type: Number,
    required: true
  },
  busInterface: {
    /* Bus by which the graphics processor is attached to the system (typically an expansion slot, such as PCI, AGP, or PCI-Express). */
    type: String,
    required: true
  },
  coreClockFrequency: {
    /* The factory core clock frequency; while some manufacturers adjust clocks lower and higher, this number will always be the reference clocks used by Nvidia. */
    type: Number,
    required: true
  },
  coreConfig: {
    type: String,
    required: false
  },
  memorySize: {
    /* The size of the onboard memory*/
    type: Number,
    required: true
  },
  memoryClockFrequency: {
    /* The factory effective memory clock frequency (while some manufacturers adjust clocks lower and higher, this number will always be the reference clocks used by Nvidia). All DDR/GDDR memories operate at half this frequency, except for GDDR5, which operates at one quarter of this frequency. */
    type: Number,
    required: true
  },
  memoryBandwidth: {
    type: Number,
    required: true
  },
  memoryBusType: {
    type: String,
    required: true
  },
  mOperationsPerSecond: {
    type: Number,
    required: true
  },
  mPixelsPerSecond: {
    type: Number,
    required: true
  },
  mTexelsPerSecond: {
    type: Number,
    required: true
  },
  mVerticlesPerSecond: {
    type: Number,
    required: true
  },
  direct3dSupport: {
    type: Boolean,
    required: true
  },
  direct3dSupportVerion: {
    //If not supported a 0 should be entered.
    type: Number,
    required: true
  },
  openGlSupport: {
    type: Boolean,
    required: true
  },
  openGlSupportVerion: {
    //If not supported a 0 should be entered.
    type: Number,
    required: true
  }
});

module.exports = mongoose.model("GPU", gpuSchema);
