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
        const cpu = new CPU({
          manufacturer: args.cpuInput.manufacturer,
          modelNumber: args.cpuInput.modelNumber,
          sSpecNumber: args.cpuInput.sSpecNumber,
          numberOfCores: +args.cpuInput.numberOfCores,
          coreFrequencyBase: +args.cpuInput.coreFrequencyBase,
          coreFrequencyTurbo: +args.cpuInput.coreFrequencyTurbo
        });
        return cpu
          .save()
          .then(result => {
            console.log(result);
            return { ...result._doc, _id: result._doc._id.toString() };
          })
          .catch(err => {
            console.log(err);
            throw err;
          });
      }
    },
    graphiql: true
  })
);

mongoose
  .connect(
    `mongodb+srv://${process.env.MONGO_USER}:${
      process.env.MONGO_PASSWORD
    }@opentechapicluster-vv4q1.mongodb.net/${
      process.env.MONGO_DB
    }?retryWrites=true&w=majority`
  )
  .then(() => {
    app.listen(3000);
  })
  .catch(err => {
    console.log(err);
  });
