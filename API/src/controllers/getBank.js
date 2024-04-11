const connection = require("../connection");

const getAllBanks = async () => {
  const [query] = await connection.execute("SELECT * FROM revgas.bancos");
  return query;
};

module.exports = getAllBanks;
