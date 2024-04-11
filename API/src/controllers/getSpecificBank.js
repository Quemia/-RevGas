const connection = require("../connection");

const getSpecificBank = async (id) => {
  const [query] = await connection.execute(
    `SELECT * FROM revgas.bancos where cod_compensacao=${id}`
  );
  return query;
};

module.exports = getSpecificBank;
