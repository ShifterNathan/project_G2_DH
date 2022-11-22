require('dotenv').config();

module.exports = {
  "development": {
    "username": "289803",
    "password": "dog.FOOD123",
    "database": "doghousefood_test",
    "host": "mysql-doghousefood.alwaysdata.net",
    "dialect": "mysql"
  }
  // "development": {
  //   "username": process.env.DB_USER,
  //   "password": process.env.DB_PASSWORD,
  //   "database": process.env.DB_DATABASE,
  //   "host": process.env.DB_HOST,
  //   "dialect": "mysql"
  // }
}
