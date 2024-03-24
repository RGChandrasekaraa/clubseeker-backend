const createRecord = async (model, data) => {
  try {
    const record = new model(data);
    await record.save();
    return record;
  } catch (error) {
    throw new Error(error.message);
  }
};

const findRecord = async (model, query) => {
  try {
    const record = await model.findOne(query);
    return record;
  } catch (error) {
    throw new Error(error.message);
  }
};

const findRecords = async (model, query) => {
  try {
    const records = await model.find(query);
    return records;
  } catch (error) {
    throw new Error(error.message);
  }
};

const updateRecord = async (model, query, data) => {
  try {
    const record = await model.findOneAndUpdate(query, data, { new: true });
    return record;
  } catch (error) {
    throw new Error(error.message);
  }
};

const deleteRecord = async (model, query) => {
  try {
    const record = await model.findOneAndDelete(query);
    return record;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  createRecord,
  findRecord,
  findRecords,
  updateRecord,
  deleteRecord,
};
