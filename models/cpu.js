const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const cpuSchema = new Schema({
  manufacturer: {
    //Intel
    //AMD, etc.
    type: String,
    required: true
  },
  modelFamily: {
    //Eg. i3, i5, i7
    type: String,
    required: false
  },
  modelNumber: {
    //Eg. i9-9900K
    type: String,
    required: true
  },
  codeName: {
    //Eg. Coffee Lake
    type: String,
    required: true
  },
  launchDate: {
    type: String,
    required: true
  },
  priceAtLaunch: {
    //In USD
    type: Number,
    required: true
  },
  // sSpecNumber: {
  //   type: String,
  //   required: false
  // },
  numberOfCores: {
    //Eg. 8
    type: Number,
    required: true
  },
  numberOfThreads: {
    // Eg 16
    type: Number,
    required: true
  },
  coreFrequencyBase: {
    //In GHz
    type: Number,
    required: true
  },
  coreFrequencyTurbo: {
    //In GHz
    type: Number,
    required: true
  },
  gpuName: {
    //Eg. UHD-630 or N/A if not present.
    type: String,
    required: false
  },
  gpuMaxClockFrequency: {
    //In GHz
    type: Number,
    required: false
  },
  cacheType: {
    //Eg. L3
    type: String,
    required: true
  },
  cacheSize: {
    //In MB
    type: Number,
    required: true
  },
  thermalDesignPower: {
    //Rated in W
    type: Number,
    required: true
  },
  socket: {
    //Eg. LGA-1151
    type: String,
    required: true
  },
  cpuType: {
    //Mobile
    //Desktop
    type: String,
    required: true
  },
  bitArchitecture: {
    //8,16,32,64bit
    type: Number,
    required: true
  },
  fabricationProcess: {
    //Rated in nanometers
    //Eg. 14nm
    type: Number,
    required: true
  },
  generation: {
    //Eg. 9th generation
    type: Number,
    required: false
  }
});

module.exports = mongoose.model("CPU", cpuSchema);
