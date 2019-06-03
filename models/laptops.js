const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const laptopSchema = new Schema({
  manufacturer: {
    type: String,
    required: true
  },
  model: {
    type: String,
    required: true
  },
  MSRPrelease: {
    type: Number,
    required: true
  },
  releaseDate: {
    type: Date,
    required: true
  },
  displaySize: {
    type: Number,
    required: true
  },
  displayBacklightTechnology: {
    type: String,
    required: true
  },
  displayPanelType: {
    type: String,
    required: true
  },
  maxDisplayResolution: {
    type: String,
    requied: true
  },
  processorManufacturer: {
    type: String,
    required: true
  },
  numberOfprocessorCores: {
    type: Number,
    required: true
  },
  processorCoreFrequency: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model("Event", eventSchema);
