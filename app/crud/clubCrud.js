const dbHandler = require("../utils/dbHandler");
const Club = require("../models/clubModel");

const createClub = async (club) => {
  return await dbHandler.createRecord(Club, club);
};
const findClub = async (query) => {
  return await dbHandler.findRecord(Club, query);
};
const findClubs = async (query) => {
  return await dbHandler.findRecords(Club, query);
};
const updateClub = async (query, data) => {
  return await dbHandler.updateRecord(Club, query, data);
};
const deleteClub = async (query) => {
  return await dbHandler.deleteRecord(Club, query);
};

module.exports = { createClub, findClub, findClubs, updateClub, deleteClub };
