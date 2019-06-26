const { buildSchema } = require("graphql");

module.exports = buildSchema(`
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
        `);
