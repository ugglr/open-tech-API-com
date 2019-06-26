const bcrypt = require("bcryptjs");

const CPU = require("../../models/cpu");
const GPU = require("../../models/gpu");

const cpus = async cpuIds => {
  try {
    const cpus = await CPU.find({ _id: { $in: cpuIds } });
    cpus.map(cpu => {
      return {
        ...cpu._doc,
        _id: cpu.id
      };
    });
    return cpus;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  cpus: async () => {
    try {
      const cpus = await CPU.find();
      return cpus.map(cpu => {
        return {
          ...cpu._id,
          _id: cpu.id
        };
      });
    } catch (err) {
      throw err;
    }
  }
};
