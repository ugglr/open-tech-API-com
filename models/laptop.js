const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const laptopSchema = new Schema({
  manufacturer: {
    type: String,
    required: true
  },
  officialModelNumber: {
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
  displayMaxResolution: {
    type: String,
    requied: true
  },
  displayBrightnessNits: {
    type: Number,
    required: false
  },
  displaySRGBcoverage: {
    type: Number,
    required: false
  },
  displayAdobeRGBcoverage: {
    type: Number,
    required: false
  },
  displayPPI: {
    type: Number,
    required: false
  },
  processorManufacturer: {
    type: String,
    required: true
  },
  processorModelNumber: {
    type: String,
    require: true
  },
  numberOfprocessorCores: {
    type: Number,
    required: true
  },
  processorCoreFrequencyBase: {
    type: Number,
    required: true
  },
  processorCoreFrequencyBoost: {
    type: Number,
    required: false
  },
  processorEDRAM: {
    type: Number,
    required: false
  },
  storageType: {
    type: String,
    required: true
  },
  memoryManufacturer: {
    type: String,
    required: false
  },
  memorySize: {
    type: Number,
    required: true
  },
  memoryFrequency: {
    type: Number,
    required: true
  },
  memoryMotherboardConnection: {
    type: String,
    required: true
  },
  memoryIsSoldered: {
    type: Boolean,
    required: true
  },
  gpuManufacturer: {
    type: String,
    required: true
  },
  gpuModel: {
    type: String,
    required: true
  },
  gpuBaseFrequency: {
    type: Number,
    required: true
  },
  gpuBoostFrequency: {
    type: Number,
    required: true
  },
  gpuMemorySize: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model("Laptop", laptopSchema);
