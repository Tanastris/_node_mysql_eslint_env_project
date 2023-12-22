const dbConfig = {
  host: process.env.DB_USER,
  user: process.env.DB_PASS,
  password: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
};
console.log('dbConfig ===', dbConfig);

module.exports = {
  dbConfig,
};
