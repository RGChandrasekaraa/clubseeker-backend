const dbHandler = require("../utils/dbHandler");
const User = require("../models/userModel");

const createUser = async (user) => {
  try {
    const record = await dbHandler.createRecord(User, user);
    return record;
  } catch (error) {
    throw new Error(error.message);
  }
};

const findUser = async (query) => {
  try {
    const record = await dbHandler.findRecord(User, query);
    return record;
  } catch (error) {
    throw new Error(error.message);
  }
};

const findUsers = async (query) => {
  try {
    const records = await dbHandler.findRecords(User, query);
    return records;
  } catch (error) {
    throw new Error(error.message);
  }
};

const updateUser = async (query, data) => {
  try {
    const record = await dbHandler.updateRecord(User, query, data);
    return record;
  } catch (error) {
    throw new Error(error.message);
  }
};

const deleteUser = async (query) => {
  try {
    const record = await dbHandler.deleteRecord(User, query);
    return record;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = { createUser, findUser, findUsers, updateUser, deleteUser };
