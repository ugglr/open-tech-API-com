const express = require("express");
const bodyParser = require("body-parser");
const graphqlHttp = require("express-graphql");
const { buildSchema } = require("graphql");
const mongoose = require("mongoose");

const CPU = require("./models/cpu");
const GPU = require("./models/gpu");
//const Laptop = require("./models/laptop");

const app = express();

app.use(bodyParser.json());

app.use(
  "/graphql",
  graphqlHttp({
    schema: buildSchema(`
            type CPU {
              _id: ID!
              manufacturer: String!
              modelFamily: String!
              modelNumber: String!
              codeName: String!
              launchDate: String!
              priceAtLaunch: Float!
              numberOfCores: Int!
              numberOfThreads: Int!
              coreFrequencyBase: Float!
              coreFrequencyTurbo: Float!
              gpuName: String
              gpuMaxClockFrequency: Float
              cacheType: String!
              cacheSize: Int!
              thermalDesignPower: Int!
              socket: String!
              cpuType: String!
              bitArchitecture: Int!
              fabricationProcess: Int!
              generation: Int
            }

            input CPUInput {
              manufacturer: String!
              modelFamily: String!
              modelNumber: String!
              codeName: String!
              launchDate: String!
              priceAtLaunch: Float!
              numberOfCores: Int!
              numberOfThreads: Int!
              coreFrequencyBase: Float!
              coreFrequencyTurbo: Float!
              gpuName: String
              gpuMaxClockFrequency: Float
              cacheType: String!
              cacheSize: Int!
              thermalDesignPower: Int!
              socket: String!
              cpuType: String!
              bitArchitecture: Int!
              fabricationProcess: Int!
              generation: Int
            }

            type GPU {
              _id: ID!
              manufacturer: String!
              modelNumber: String!
              codeName: String
              launchDate: String!
              priceAtLaunch: Float!
              gpuType: String!
              fabricationProcess: Int!
              busInterface: String!
              numberOfCores: Int!
              coreClockFrequency: Float!
              coreConfig: String
              memoryType: String!
              memorySize: Int!
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
              thermalDesignPower: Int!
            }

            input GPUInput {
              manufacturer: String!
              modelNumber: String!
              codeName: String
              launchDate: String!
              priceAtLaunch: Float!
              gpuType: String!
              fabricationProcess: Int!
              busInterface: String!
              numberOfCores: Int!
              coreClockFrequency: Float!
              coreConfig: String
              memoryType: String!
              memorySize: Int!
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
              thermalDesignPower: Int!
            }

            type RootQuery {
              cpus: [CPU!]!
              gpus: [GPU!]!
            }

            type RootMutation {
              createCPU(cpuInput: CPUInput): CPU
              createGPU(gpuInput: GPUInput): GPU
            }

            schema {
                query: RootQuery
                mutation: RootMutation
            }
        `),
    rootValue: {
      //CPU LOGIC
      cpus: () => {
        return CPU.find()
          .then(cpus => {
            return cpus.map(cpu => {
              return { ...cpu._doc, _id: cpu._doc._id.toString() };
            });
          })
          .catch(err => {
            throw err;
          });
      },
      createCPU: args => {
        const cpu = new CPU({
          manufacturer: args.cpuInput.manufacturer,
          modelNumber: args.cpuInput.modelNumber,
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
      },
      //GPU LOGIC
      gpus: () => {
        return GPU.find()
          .then(gpus => {
            return gpus.map(gpu => {
              return { ...gpu._doc, _id: gpu._doc._id.toString() };
            });
          })
          .catch(err => {
            throw err;
          });
      },
      createGPU: args => {
        const gpu = new GPU({
          manufacturer: args.gpuInput.manufacturer,
          modelName: args.gpuInput.modelNumber,
          codeName: args.gpuInput.codeName,
          launchDate: args.gpuInput.launchDate,
          gpuType: args.gpuInput.gpuType,
          fabricationProcess: +args.gpuInput.fabricationProcess,
          busInterface: args.gpuInput.busInterface,
          coreClockFrequency: +args.gpuInput.coreClockFrequency,
          coreConfig: args.gpuInput.coreConfig,
          memorySize: +args.gpuInput.memorySize,
          memoryClockFrequency: +args.gpuInput.memoryClockFrequency,
          memoryBandwidth: +args.gpuInput.memoryBandwidth,
          memoryBusType: args.gpuInput.memoryBusType,
          mOperationsPerSecond: +args.gpuInput.mOperationsPerSecond,
          mPixelsPerSecond: +args.gpuInput.mPixelsPerSecond,
          mTexelsPerSecond: +args.gpuInput.mTexelsPerSecond,
          mVerticlesPerSecond: +args.gpuInput.mVerticlesPerSecond,
          direct3dSupport: args.gpuInput.direct3dSupport,
          direct3dSupportVersion: +args.gpuInput.direct3dSupportVersion,
          openGlSupport: args.gpuInput.openGlSupport,
          openGlSupportVersion: +args.gpuInput.openGlSupportVersion
        });
        return gpu
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
    }?retryWrites=true`
  )
  .then(() => {
    app.listen(3000);
  })
  .catch(err => {
    console.log(err);
  });
