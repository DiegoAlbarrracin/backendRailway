const configRailway = require('./config.js');

module.exports = {
    HOST: configRailway.dbHOST,
    USER: configRailway.dbUSER,
    PASSWORD: configRailway.dbPASSWORD,
    DB: configRailway.dbNAME,
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };