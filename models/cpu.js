const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const cpuSchema = new Schema({
  manufacturer: {
    type: String,
    required: true
  },
  modelNumber: {
    type: String,
    required: true
  },
  sSpecNumber: {
    type: String,
    required: false
  },
  numberOfCores: {
    type: Number,
    required: true
  },
  coreFrequencyBase: {
    type: Number,
    required: true
  },
  coreFrequencyTurbo: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model("CPU", cpuSchema);
