const dbHandler = require("../utils/dbHandler");
const University = require("../models/universityModel");

const createUniversity = async (university) => {
  return await dbHandler.createRecord(University, university);
};

const findUniversity = async (query) => {
  return await dbHandler.findRecord(University, query);
};

const findUniversities = async (query) => {
  return await dbHandler.findRecords(University, query);
};

const updateUniversity = async (query, data) => {
  return await dbHandler.updateRecord(University, query, data);
};

const deleteUniversity = async (query) => {
  return await dbHandler.deleteRecord(University, query);
};

module.exports = {
  createUniversity,
  findUniversity,
  findUniversities,
  updateUniversity,
  deleteUniversity,
};
