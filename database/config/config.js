require('dotenv').config();

module.exports ={
  "development": {
    "username": "root",
    "password": null,
    "database": "doghousefood_",
    "host": "mysql-doghousefood.alwaysdata.net",
    "dialect": "mysql",
    "port": 3306
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "doghousefood_test",
    "host": "mysql-doghousefood.alwaysdata.net",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "doghousefood_web",
    "host": "mysql-doghousefood.alwaysdata.net",
    "dialect": "mysql"
  }
}
