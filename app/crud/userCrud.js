const dbHandler = require("../utils/dbHandler");
const User = require("../models/userModel");
const Club = require("../models/clubModel");

const createUser = async (user) => {
  return await dbHandler.createRecord(User, user);
};

const findUser = async (query) => {
  return await dbHandler.findRecord(User, query);
};

const findUsers = async (query) => {
  return await dbHandler.findRecords(User, query);
};

const updateUser = async (query, data) => {
  return await dbHandler.updateRecord(User, query, data);
};

const deleteUser = async (query) => {
  return await dbHandler.deleteRecord(User, query);
};

const findClubs = async (query) => {
  return await dbHandler.findRecords(Club, query);
};

module.exports = {
  createUser,
  findUser,
  findUsers,
  updateUser,
  deleteUser,
  findClubs,
};
