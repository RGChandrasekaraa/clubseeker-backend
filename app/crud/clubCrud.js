const dbHandler = require("../utils/dbHandler");
const Club = require("../models/clubModel");

const createClub = async (club) => {
  try {
    const record = await dbHandler.createRecord(Club, club);
    return record;
  } catch (error) {
    throw new Error(error.message);
  }
};
const findClub = async (query) => {
  try {
    const record = await dbHandler.findRecord(Club, query);
    return record;
  } catch (error) {
    throw new Error(error.message);
  }
};
const findClubs = async (query) => {
  try {
    const records = await dbHandler.findRecords(Club, query);
    return records;
  } catch (error) {
    throw new Error(error.message);
  }
};
const updateClub = async (query, data) => {
  try {
    const record = await dbHandler.updateRecord(Club, query, data);
    return record;
  } catch (error) {
    throw new Error(error.message);
  }
};
const deleteClub = async (query) => {
  try {
    const record = await dbHandler.deleteRecord(Club, query);
    return record;
  } catch (error) {
    throw new Error(error.message);
  }
};
module.exports = { createClub, findClub, findClubs, updateClub, deleteClub };
