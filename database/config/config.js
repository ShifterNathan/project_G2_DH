require('dotenv').config();
//esto está en la clase 32 en 1:32 minutos y lo de env. igual

module.exports ={
  "development": {
    "username": process.env. DB_USER,
    "password": process.env. DB-PASSWORD, 
    "database": process.env. DB_DATABASE,
    "host": process.env. DB_HOST,
    "dialect": process.env. DB_DIALECT, 
    "port": process.env. DB_PORT  
  },
  
}
