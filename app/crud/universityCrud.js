const dbHandler = require("../utils/dbHandler");
const University = require("../models/universityModel");

const createUniversity = async (university) => {
  try {
    const record = await dbHandler.createRecord(University, university);
    return record;
  } catch (error) {
    throw new Error(error.message);
  }
};

const findUniversity = async (query) => {
  try {
    const record = await dbHandler.findRecord(University, query);
    return record;
  } catch (error) {
    throw new Error(error.message);
  }
};

const findUniversities = async (query) => {
  try {
    const records = await dbHandler.findRecords(University, query);
    return records;
  } catch (error) {
    throw new Error(error.message);
  }
};

const updateUniversity = async (query, data) => {
  try {
    const record = await dbHandler.updateRecord(University, query, data);
    return record;
  } catch (error) {
    throw new Error(error.message);
  }
};

const deleteUniversity = async (query) => {
  try {
    const record = await dbHandler.deleteRecord(University, query);
    return record;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  createUniversity,
  findUniversity,
  findUniversities,
  updateUniversity,
  deleteUniversity,
};
