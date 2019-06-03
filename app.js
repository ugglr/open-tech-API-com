const express = require("express");
const bodyParser = require("body-parser");
const graphqlHttp = require("express-graphql");
const { buildSchema } = require("graphql");
const mongoose = require("mongoose");

const CPU = require("./models/cpu");
const GPU = require("./models/gpu");
const Laptop = require("./models/laptop");

const app = express();

app.use(bodyParser.json());

app.use(
  "graphql",
  graphqlHttp({
    schema: buildSchema(`
            type CPU {
              _id: ID!
              manufacturer: String!
              modelNumber: String!
              sSpecNumber: String!
              numberOfCores: Integer!
              coreFrequencyBase: Float!
              coreFrequencyTurbo: Float!
            }

            input CPUInput {
              manufacturer: String!
              modelNumber: String!
              sSpecNumber: String!
              numberOfCores: Integer!
              coreFrequencyBase: Float!
              coreFrequencyTurbo: Float!
            }

            type GPU {
              _id: ID!
              manufacturer: String!
              modelName: String!
              codeName: String!
              launchDate: String!
              gpuType: String!
              fabricationProcess: Integer!
              busInterface: String!
              coreClockFrequency: Float!
              coreConfig: String!
              memorySize: Integer!
              memoryClockFrequency: Float!
              memoryBandwidth: Float!
              memoryBusType: String!
              mOperationsPerSecond: Float!
              mPixelsPerSecond: Float!
              mTexelsPerSecond: Float!
              mVerticlesPerSecond: Float!
              direct3dSupport: Boolean!
              direct3dSupportVersion: Float!
              openGlSupport: Boolean!
              openGlSupportVersion: Float!
            }

            GPUInput {
              manufacturer: String!
              modelName: String!
              codeName: String!
              launchDate: String!
              gpuType: String!
              fabricationProcess: Integer!
              busInterface: String!
              coreClockFrequency: Float!
              coreConfig: String!
              memorySize: Integer!
              memoryClockFrequency: Float!
              memoryBandwidth: Float!
              memoryBusType: String!
              mOperationsPerSecond: Float!
              mPixelsPerSecond: Float!
              mTexelsPerSecond: Float!
              mVerticlesPerSecond: Float!
              direct3dSupport: Boolean!
              direct3dSupportVersion: Float!
              openGlSupport: Boolean!
              openGlSupportVersion: Float!
            }

            type Laptop {
              _id: ID!
            }

            input LaptopInput {

            }

            type RootQuery {
              cpus: [CPU!]!
              gpus: [GPU!]!
              laptops: [Laptop!]!
            }

            type RootMutation {
              createCPU(cpuInput: CPUInput): CPU
              createGPU(gpuInput: GPUInput): GPU
              createLaptop(laptopInput: LaptopInput): Laptop
            }

            schema {
                query: RootQuery
                mutation: RootMutation
            }
        `),
    rootValue: {
      cpus: () => {
        return CPU.find()
          .then()
          .catch();
      },
      createCPU: args => {
        const cpu = new CPU({});
        return cpu
          .save()
          .then()
          .catch();
      }
    },
    graphiql: true
  })
);

mongoose
  .connect(``)
  .then()
  .catch();
