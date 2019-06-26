const express = require("express");
const bodyParser = require("body-parser");
const graphqlHttp = require("express-graphql");
const { buildSchema } = require("graphql");
const mongoose = require("mongoose");

const graphQlSchema = require("./graphql/schema/index");
const graphQlResolvers = require("./graphql/resolvers/index");

const app = express();

app.use(bodyParser.json());

app.use(
  "/graphql",
  graphqlHttp({
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
          modelFamily: args.cpuInput.modelFamily,
          modelNumber: args.cpuInput.modelNumber,
          codeName: args.cpuInput.codeName,
          launchDate: args.cpuInput.launchDate,
          priceAtLaunch: args.cpuInput.priceAtLaunch,
          numberOfCores: +args.cpuInput.numberOfCores,
          numberOfThreads: +args.cpuInput.numberOfThreads,
          coreFrequencyBase: +args.cpuInput.coreFrequencyBase,
          coreFrequencyTurbo: +args.cpuInput.coreFrequencyTurbo,
          gpuName: args.cpuInput.gpuName,
          gpuMaxClockFrequency: +args.cpuInput.gpuMaxClockFrequency,
          cacheType: args.cpuInput.cacheType,
          cacheSize: +args.cpuInput.cacheSize,
          thermalDesignPower: +args.cpuInput.thermalDesignPower,
          socket: args.cpuInput.socket,
          cpuType: args.cpuInput.cpuType,
          bitArchitecture: +args.cpuInput.bitArchitecture,
          fabricationProcess: +args.cpuInput.fabricationProcess,
          generation: +args.cpuInput.generation
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
          modelNumber: args.gpuInput.modelNumber,
          codeName: args.gpuInput.codeName,
          launchDate: args.gpuInput.launchDate,
          priceAtLaunch: +args.gpuInput.priceAtLaunch,
          gpuType: args.gpuInput.gpuType,
          fabricationProcess: +args.gpuInput.fabricationProcess,
          busInterface: args.gpuInput.busInterface,
          numberOfCores: +args.gpuInput.numberOfCores,
          coreClockFrequency: +args.gpuInput.coreClockFrequency,
          coreConfig: args.gpuInput.coreConfig,
          memoryType: args.gpuInput.memoryType,
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
          openGlSupportVersion: +args.gpuInput.openGlSupportVersion,
          thermalDesignPower: +args.gpuInput.thermalDesignPower
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
