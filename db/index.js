const { Pool } = require("pg");
const options = require("../db/config");
const pool = new Pool(options);
module.exports = {
  query: (text, params) => pool.query(text, params),
};
//
